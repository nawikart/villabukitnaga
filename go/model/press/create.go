package press

import (
	"net/http"
	"encoding/json"
	"../../crud"
	"../../db/mysql"
	// "fmt"
)

func Create(w http.ResponseWriter, r *http.Request) {
	uuid, status, err, _ := crud.Save(w, r, tablename, fields)
	
	result = Result{}
	if status == "success" {
		result.Status = "success"
		result.Data = Read(uuid)		
	}else{
		result.Err = err
	}

	// HAPUS INI KALAU TIDAK TERJADI DUPLIKASI KETIKA INSERT
	DB, _ := mysql.Connect()
	defer DB.Close()
		
	DB.Exec(`DELETE FROM press WHERE title IS NULL OR body IS NULL`)
	defer DB.Close()
	// END HAPUS ////////////	

	js, _ := json.Marshal(result)
	w.Write(js)	
}