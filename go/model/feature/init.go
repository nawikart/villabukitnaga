package feature

import (
	"../../config"
)


var tablename = "feature"

var fields = []config.DataModel{
									{
										Field: "title",
										Input: "title",
										Type: "string",
									},
									{
										Field: "body",
										Input: "body",
										Type: "string",
									},
									{
										Field: "images",
										Input: "images",
										Type: "image",
										FileFn: "imageFile",
									},
								}



type Feature struct{
	Uuid string  `json:"uuid"`
	Title string  `json:"title"`
	Body string  `json:"body"`
	Image string  `json:"image"`
	Images []string  `json:"images"`	
}

type Result struct {
	Status string `json:"status"`
	Err error `json:"error"`
	Data Feature `json:"data"`
}

var result Result	
var feature Feature


// var imgixUrl = "https://bejoss.imgix.net/feature/"
var imgixUrl = "/media/images/feature/"