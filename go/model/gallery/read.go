package gallery

import (
	"../../db/mysql"
	"encoding/json"
	"net/http"
	"github.com/gorilla/mux"
	// "fmt"
)

func ReadApi(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Authorization, Content-Type")
	vars := mux.Vars(r)
	
	gallery = Read(vars["uuid"])

	js, _ := json.Marshal(gallery)
	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}

func Read(uuid string) Gallery{
    DB, _ := mysql.Connect()
	defer DB.Close()

	var gallery Gallery	
	// sql := "SELECT UUID, mechanics, name, image FROM gallery WHERE uuid = '"+ uuid +"'"
	sql := "SELECT UUID, title, images FROM gallery WHERE uuid = '"+ uuid +"'"

	rows, _ := DB.Query(sql)
	defer rows.Close()

	for rows.Next() {
		gallery = Gallery{}
		rows.Scan(&gallery.Uuid, &gallery.Title, &gallery.Image)

		var imgs []string
		if json.Unmarshal([]byte(gallery.Image), &imgs) == nil {
		}
		for i := 0; i < len(imgs); i++ {
			if imgs[i] != "" {
				gallery.Images = append(gallery.Images, imgixUrl + imgs[i])
			}
		}
		
		gallery.Image = gallery.Images[0]
	}
	
	return gallery
}


func ReadAll(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Authorization, Content-Type")
	
    DB, _ := mysql.Connect()
	defer DB.Close()

	var gallery Gallery
	var gallerys []Gallery
	
	rows, _ := DB.Query("SELECT UUID, title, images FROM gallery")
	defer rows.Close()

	for rows.Next() {
			gallery = Gallery{}
		rows.Scan(&gallery.Uuid, &gallery.Title, &gallery.Images)

		var imgs []string
		if json.Unmarshal([]byte(gallery.Image), &imgs) == nil {
		}
		for i := 0; i < len(imgs); i++ {
			if imgs[i] != "" {
				gallery.Images = append(gallery.Images, imgixUrl + imgs[i])
			}
		}

		gallerys = append(gallerys, gallery)
	}


	js, _ := json.Marshal(gallerys)
	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}