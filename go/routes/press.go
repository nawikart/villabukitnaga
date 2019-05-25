package routes

import (
	"net/http"
	"github.com/gorilla/mux"
	"../auth"
	"../model/press"	
)


func PressRoutes(r *mux.Router) {
	r.Handle("/api/press/add", auth.JwtMiddleware.Handler(http.HandlerFunc(press.Create))) //.Methods("POST")
	r.Handle("/api/press/{uuid}/edit", auth.JwtMiddleware.Handler(http.HandlerFunc(press.Update))) //.Methods("PUT")
	r.HandleFunc("/api/presss/all", press.ReadAll) //.Methods("GET")	
	r.HandleFunc("/api/press/{uuid}", press.ReadApi) //.Methods("GET")
}