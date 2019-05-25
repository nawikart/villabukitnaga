package routes

import (
	"net/http"
	"github.com/gorilla/mux"
	"../auth"
	"../model/about_bali"	
)


func AboutBaliRoutes(r *mux.Router) {
	r.Handle("/api/about_bali/add", auth.JwtMiddleware.Handler(http.HandlerFunc(about_bali.Create))) //.Methods("POST")
	r.Handle("/api/about_bali/{uuid}/edit", auth.JwtMiddleware.Handler(http.HandlerFunc(about_bali.Update))) //.Methods("PUT")
	r.HandleFunc("/api/about_balis/all", about_bali.ReadAll) //.Methods("GET")	
	r.HandleFunc("/api/about_bali/{uuid}", about_bali.ReadApi) //.Methods("GET")
}