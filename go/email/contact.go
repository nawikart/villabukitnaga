package email

import (
	// "../../../db/mysql"
	"encoding/json"
	"net/http"
	// "fmt"
)

func Contact(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Authorization, Content-Type")
	
	var result Result
    err := r.ParseMultipartForm(200000) // grab the multipart form
    if err != nil {
		result.Err = err
		result.Status = "failed"
	}else{
		r.ParseForm()
		
		msg := ""
		for k := range r.Form {
			msg += `
			`+ k + `: `+ r.Form[k][0] +`
			
			`
		}		

		msg += `

			this contact email is come from website www.villabukitnaga.com
		`
		// fmt.Println(msg)
		
		to := []string{"nawi@outpost-asia.com"}
		SendMail(r.Form["subject"][0], msg, to, []string{})
		result.Status = "success"
	}


	js, _ := json.Marshal(result)
	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}