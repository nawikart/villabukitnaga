package press

import (
	"net/http"
	"encoding/json"
	"../../crud"
)

func Update(w http.ResponseWriter, r *http.Request) {
	uuid, status, err, _ := crud.Save(w, r, tablename, fields)

	result = Result{}
	if status == "success" {
		result.Status = "success"
		result.Data = Read(uuid)		
	}else{
		result.Err = err
	}

	js, _ := json.Marshal(result)
	w.Write(js)	
}