package feature

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
	
	feature = Read(vars["uuid"])

	js, _ := json.Marshal(feature)
	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}

func Read(uuid string) Feature{
    DB, _ := mysql.Connect()
	defer DB.Close()

	var feature Feature	
	// sql := "SELECT UUID, mechanics, name, image FROM feature WHERE uuid = '"+ uuid +"'"
	sql := "SELECT UUID, title, body, images FROM feature WHERE uuid = '"+ uuid +"'"

	rows, _ := DB.Query(sql)
	defer rows.Close()

	for rows.Next() {
		feature = Feature{}
		rows.Scan(&feature.Uuid, &feature.Title, &feature.Body, &feature.Image)

		var imgs []string
		if json.Unmarshal([]byte(feature.Image), &imgs) == nil {
		}
		for i := 0; i < len(imgs); i++ {
			if imgs[i] != "" {
				feature.Images = append(feature.Images, imgixUrl + imgs[i])
			}
		}
		feature.Image = feature.Images[0]
	}
	
	return feature
}


func ReadAll(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Authorization, Content-Type")
	
    DB, _ := mysql.Connect()
	defer DB.Close()

	var feature Feature
	var features []Feature
	
	rows, _ := DB.Query("SELECT UUID, title, body, images FROM feature")
	defer rows.Close()

	for rows.Next() {
		feature = Feature{}
		rows.Scan(&feature.Uuid, &feature.Title, &feature.Body, &feature.Image)

		var imgs []string
		if json.Unmarshal([]byte(feature.Image), &imgs) == nil {
		}
		for i := 0; i < len(imgs); i++ {
			if imgs[i] != "" {
				feature.Images = append(feature.Images, imgixUrl + imgs[i])
			}
		}
		feature.Image = feature.Images[0]

		features = append(features, feature)
	}


	js, _ := json.Marshal(features)
	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}