package routes

import (
	"net/http"
	"github.com/gorilla/mux"
	"../auth"
	"../model/gallery"	
)


func GalleryRoutes(r *mux.Router) {
	r.Handle("/api/gallery/add", auth.JwtMiddleware.Handler(http.HandlerFunc(gallery.Create))) //.Methods("POST")
	r.Handle("/api/gallery/{uuid}/edit", auth.JwtMiddleware.Handler(http.HandlerFunc(gallery.Update))) //.Methods("PUT")
	r.HandleFunc("/api/gallerys/all", gallery.ReadAll) //.Methods("GET")	
	r.HandleFunc("/api/gallery/{uuid}", gallery.ReadApi) //.Methods("GET")
}