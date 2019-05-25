package mysql

import (
	"net/http"
)


func GetNewUuidApi(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Authorization, Content-Type")
	
	w.Write([]byte(GetLastUuid()))
}