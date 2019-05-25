package routes

import (
	"github.com/gorilla/mux"
	// "net/http"
	"../model/admin"
	"../email"
)

func ApiRoutes(r *mux.Router) {
    r.HandleFunc("/api/contact", email.Contact)
	r.HandleFunc("/api/reservation", email.Reservation)
	

	r.HandleFunc("/api/admin/login", admin.Login) //.Methods("POST")
}