package gallery

import (
	"../../config"
)


var tablename = "gallery"

var fields = []config.DataModel{
									{
										Field: "title",
										Input: "title",
										Type: "string",
									},
									{
										Field: "images",
										Input: "images",
										Type: "image",
										FileFn: "imageFile",
									},
								}



type Gallery struct{
	Uuid string  `json:"uuid"`
	Title string  `json:"title"`
	Image string  `json:"image"`
	Images []string  `json:"images"`	
}

type Result struct {
	Status string `json:"status"`
	Err error `json:"error"`
	Data Gallery `json:"data"`
}

var result Result	
var gallery Gallery


// var imgixUrl = "https://bejoss.imgix.net/gallery/"
var imgixUrl = "/media/images/gallery/"