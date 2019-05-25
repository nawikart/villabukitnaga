package main

import (
        "fmt"
        "net/http"
        "./routes"
        "github.com/gorilla/mux"
        )

func main() {
    r := mux.NewRouter()
    // r.PathPrefix("/media/").Handler(http.StripPrefix("/media/", http.FileServer(http.Dir("../media/"))))
    r.PathPrefix("/media/").Handler(http.StripPrefix("/media/", http.FileServer(http.Dir("../media/"))))
    r.PathPrefix("/assets/").Handler(http.StripPrefix("/assets/", http.FileServer(http.Dir("../assets/"))))    
    
    routes.ApiRoutes(r)
    routes.GalleryRoutes(r)
    routes.FeatureRoutes(r)
    routes.PressRoutes(r)
    routes.AboutBaliRoutes(r)
    
    routes.ClientAdminRoutes(r)
    routes.NuxtjsRoutes(r)

    fmt.Println("starting web server at http://localhost:80/")
    http.ListenAndServe(":80", r)
}