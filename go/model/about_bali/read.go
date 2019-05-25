package about_bali

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
	
	about_bali = Read(vars["uuid"])

	js, _ := json.Marshal(about_bali)
	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}

func Read(uuid string) AboutBali{
    DB, _ := mysql.Connect()
	defer DB.Close()

	var about_bali AboutBali	
	// sql := "SELECT UUID, mechanics, name, image FROM about_bali WHERE uuid = '"+ uuid +"'"
	sql := "SELECT UUID, body1, body2 FROM about_bali WHERE uuid = '"+ uuid +"'"

	rows, _ := DB.Query(sql)
	defer rows.Close()

	for rows.Next() {
		about_bali = AboutBali{}
		rows.Scan(&about_bali.Uuid, &about_bali.Body1, &about_bali.Body2)		
	}
	
	return about_bali
}


func ReadAll(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Authorization, Content-Type")
	
    DB, _ := mysql.Connect()
	defer DB.Close()

	var about_bali AboutBali
	var about_balis []AboutBali
	
	rows, _ := DB.Query("SELECT UUID, body1, body2 FROM about_bali")
	defer rows.Close()

	for rows.Next() {
		about_bali = AboutBali{}
		rows.Scan(&about_bali.Uuid, &about_bali.Body1, &about_bali.Body2)

		about_balis = append(about_balis, about_bali)
	}


	js, _ := json.Marshal(about_balis)
	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}