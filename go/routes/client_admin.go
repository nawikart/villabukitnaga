package routes

import (
	"net/http"
    "github.com/gorilla/mux"
    "html/template"
    "fmt"
)


func ClientAdminRoutes(r *mux.Router) {
    
    r.PathPrefix("/static").Handler(http.StripPrefix("/static", http.FileServer(http.Dir("./client/dist/static"))))
 
    r.HandleFunc("/admiin", func(w http.ResponseWriter, r *http.Request) {
        var t, err = template.ParseFiles("client/dist/index.html")
        if err != nil {
            fmt.Println(err.Error())
            return
        }
        t.Execute(w, false)
    })
    r.HandleFunc("/admiin/", func(w http.ResponseWriter, r *http.Request) {
        var t, err = template.ParseFiles("client/dist/index.html")
        if err != nil {
            fmt.Println(err.Error())
            return
        }
        t.Execute(w, false)
    })
    r.HandleFunc("/admiin/{one}", func(w http.ResponseWriter, r *http.Request) {
        var t, err = template.ParseFiles("client/dist/index.html")
        if err != nil {
            fmt.Println(err.Error())
            return
        }
        t.Execute(w, false)
    })
    r.HandleFunc("/admiin/{one}/", func(w http.ResponseWriter, r *http.Request) {
        var t, err = template.ParseFiles("client/dist/index.html")
        if err != nil {
            fmt.Println(err.Error())
            return
        }
        t.Execute(w, false)
    })
    r.HandleFunc("/admiin/{one}/{two}", func(w http.ResponseWriter, r *http.Request) {
        var t, err = template.ParseFiles("client/dist/index.html")
        if err != nil {
            fmt.Println(err.Error())
            return
        }
        t.Execute(w, false)
    })                       
    r.HandleFunc("/admiin/{one}/{two}/", func(w http.ResponseWriter, r *http.Request) {
        var t, err = template.ParseFiles("client/dist/index.html")
        if err != nil {
            fmt.Println(err.Error())
            return
        }
        t.Execute(w, false)
	})
	
    r.HandleFunc("/admiin/{one}/{two}/{three}", func(w http.ResponseWriter, r *http.Request) {
        var t, err = template.ParseFiles("client/dist/index.html")
        if err != nil {
            fmt.Println(err.Error())
            return
        }
        t.Execute(w, false)
    })                       
    r.HandleFunc("/admiin/{one}/{two}/{three}/", func(w http.ResponseWriter, r *http.Request) {
        var t, err = template.ParseFiles("client/dist/index.html")
        if err != nil {
            fmt.Println(err.Error())
            return
        }
        t.Execute(w, false)
    })	 	
}