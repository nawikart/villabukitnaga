package email

import (
	// "../../../db/mysql"
	"encoding/json"
	"fmt"
	"net/http"
)

func Contact(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Authorization, Content-Type")

	var result Result
	err := r.ParseMultipartForm(200000) // grab the multipart form
	if err != nil {
		result.Err = err
		result.Status = "failed"
	} else {
		r.ParseForm()

		items := [][]string{{"name", "Name"}, {"email", "Email"}, {"subject", "Subject"}, {"message", "Message"}}
		msg := ""
		for _, v := range items {
			if r.Form[v[0]] != nil {
				msg += `
				` + v[1] + `: ` + r.Form[v[0]][0] + `
				`
			}
		}

		msg += `

			this contact email is come from website www.villabukitnaga.com
		`
		fmt.Println(msg)

		// to := []string{"nawikartini@gmail.com"}
		to := []string{"reservation@villabukitnaga.com"}
		SendMail(r.Form["subject"][0], msg, to, []string{})
		result.Status = "success"
	}

	js, _ := json.Marshal(result)
	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}
