package email

import (
	// "../../../db/mysql"
	"encoding/json"
	"net/http"
	// "fmt"
)

func Reservation(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Authorization, Content-Type")

	var result Result
	err := r.ParseMultipartForm(200000) // grab the multipart form
	if err != nil {
		result.Err = err
		result.Status = "failed"
	} else {
		r.ParseForm()

		items := [][]string{
			{"adults", "Adults"},
			{"childrens", "Childrens"},
			{"infants", "Infants"},
			{"startdate", "Start date"},
			{"enddate", "End date"},
			{"firstname", "First name"},
			{"lastname", "Last name"},
			{"email", "Email"},
			{"company", "Company"},
			{"address", "Address"},
			{"country", "Country"},
			{"telp", "No. telp"},
			{"fax", "Fax"},
			{"enquiry", "Enquiry"},
		}
		msg := ""
		for _, v := range items {
			if r.Form[v[0]] != nil {
				msg += `
				` + v[1] + `: ` + r.Form[v[0]][0] + `
				`
			}
		}

		msg += `

			this reservation email is come from website www.villabukitnaga.com
		`
		// fmt.Println(msg)
		sbj := "Reservation from website Bukit Naga"
		to := []string{"reservation@villabukitnaga.com"}
		// to := []s tring{"nawikartini@gmail.com"}
		SendMail(sbj, msg, to, []string{})
		result.Status = "success"
	}

	js, _ := json.Marshal(result)
	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}
