package admin

import (
	"../../db/mysql"
	"encoding/json"
	"io/ioutil"
	"net/http"
	"../../utils"
	"../../auth"
	"fmt"
)

type LoginResult struct {
	Status string `json:"status"`
	Err error `json:"error"`
	Data Admin `json:"data"`
	Token string `json:"token"`
}
func Login(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	
	body, _ := ioutil.ReadAll(r.Body)
	var data = make(map[string]string)

	var result LoginResult

	fmt.Println("LOGIN")
	
    DB, _ := mysql.Connect()
	defer DB.Close()

	if json.Unmarshal(body, &data) == nil{
		rows, _ := DB.Query(`SELECT UUID, name, uname, email, phone, password FROM admin 
								WHERE uname = "`+ data["uname"] +`"`)
		defer rows.Close()
			result.Status = "success"
		
		admin := Admin{}
		result.Status = "not found"

		for rows.Next() {
			rows.Scan(&admin.Uuid, &admin.Name, &admin.Uname, &admin.Email, &admin.Phone, &admin.Password)
			
			if admin.Password == utils.Hash(data["password"]) {
				result.Status = "success"
				result.Token = auth.GetToken()
				result.Data = admin
								
			}else{
				result.Status = "invalid password"
			}
		}
	}
	
	js, _ := json.Marshal(result)
	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}