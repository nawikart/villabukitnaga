package press

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
	
	press = Read(vars["uuid"])

	js, _ := json.Marshal(press)
	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}

func Read(uuid string) Press{
    DB, _ := mysql.Connect()
	defer DB.Close()

	var press Press	
	// sql := "SELECT UUID, mechanics, name, image FROM press WHERE uuid = '"+ uuid +"'"
	sql := "SELECT UUID, title, body, images, pdfs FROM press WHERE uuid = '"+ uuid +"'"

	rows, _ := DB.Query(sql)
	defer rows.Close()

	for rows.Next() {
		press = Press{}
		rows.Scan(&press.Uuid, &press.Title, &press.Body, &press.Image, &press.Pdf)

		// IMAGES
		var imgs []string
		if json.Unmarshal([]byte(press.Image), &imgs) == nil {
		}
		for i := 0; i < len(imgs); i++ {
			if imgs[i] != "" {
				press.Images = append(press.Images, imgixUrl + imgs[i])
			}
		}
		press.Image = press.Images[0]


		// PDF
		var pdfs []string
		if json.Unmarshal([]byte(press.Pdf), &pdfs) == nil {
		}
		for i := 0; i < len(pdfs); i++ {
			if pdfs[i] != "" {
				press.Pdfs = append(press.Pdfs, pdfs[i])
			}
		}
		press.Pdf = press.Pdfs[0]		
	}
	
	return press
}


func ReadAll(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Authorization, Content-Type")
	
    DB, _ := mysql.Connect()
	defer DB.Close()

	var press Press
	var presss []Press
	
	rows, _ := DB.Query("SELECT UUID, title, body, images, pdfs FROM press")
	defer rows.Close()

	for rows.Next() {
		press = Press{}
		rows.Scan(&press.Uuid, &press.Title, &press.Body, &press.Image, &press.Pdf)

		// fmt.Println(press.Pdf)

		var imgs []string
		if json.Unmarshal([]byte(press.Image), &imgs) == nil {
		}
		for i := 0; i < len(imgs); i++ {
			if imgs[i] != "" {
				press.Images = append(press.Images, imgixUrl + imgs[i])
			}
		}

		press.Image = press.Images[0]


		// PDF
		var pdfs []string
		if json.Unmarshal([]byte(press.Pdf), &pdfs) == nil {
		}

		for i := 0; i < len(pdfs); i++ {
			if pdfs[i] != "" {
				press.Pdfs = append(press.Pdfs, imgixUrl + pdfs[i])
			}
		}
		press.Pdf = press.Pdfs[0]

		presss = append(presss, press)
	}


	js, _ := json.Marshal(presss)
	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}