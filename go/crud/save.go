package crud

import (
	// "strings"
	"fmt"
	"net/http"
	imageHandler "../image"
	"github.com/gorilla/mux"
	"../db/mysql"
	"../config"
)

func Save(w http.ResponseWriter, r *http.Request, tablename string, fields []config.DataModel) (string, string, error, []string) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Authorization, Content-Type")
	vars := mux.Vars(r)
	uuid := vars["uuid"]

	DB, _ := mysql.Connect()
	defer DB.Close()
		
	if uuid == "" {
		uuid = mysql.GetLastUuid()
		DB.Exec(`INSERT INTO `+ tablename +` (UUID) VALUE ('`+ uuid +`')`)
		defer DB.Close()
	}
	
    err := r.ParseMultipartForm(200000) // grab the multipart form
    if err != nil {
        fmt.Fprintln(w, err)
        return "", "", err, []string{}
	}
	r.ParseForm()
	
	for i := 0; i < len(fields); i++ {
		if fields[i].Type == "image" {
			image, _ := imageHandler.Upload(w, r, fields[i].FileFn, fields[i].Input, uuid, (dirImage + tablename +"/"))	
			if image != nil {
				r.Form[fields[i].Input] = image // []string{image}
			}
		}
	}
		
	result = Result{}
	res, err := DB.Exec(mysql.SqlUpdate(r, tablename, uuid, fields))
	defer DB.Close()

	if err != nil {
		result.Err = err
		result.Status = "failed"
	}else{		
		if res != nil {
			result.Status = "success"
			// result.Data = Read(uuid)			
		}
	}

	return uuid, result.Status, result.Err, result.Err2		
}