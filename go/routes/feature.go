package routes

import (
	"net/http"
	"github.com/gorilla/mux"
	"../auth"
	"../model/feature"	
)


func FeatureRoutes(r *mux.Router) {
	r.Handle("/api/feature/add", auth.JwtMiddleware.Handler(http.HandlerFunc(feature.Create))) //.Methods("POST")
	r.Handle("/api/feature/{uuid}/edit", auth.JwtMiddleware.Handler(http.HandlerFunc(feature.Update))) //.Methods("PUT")
	r.HandleFunc("/api/features/all", feature.ReadAll) //.Methods("GET")	
	r.HandleFunc("/api/feature/{uuid}", feature.ReadApi) //.Methods("GET")
}