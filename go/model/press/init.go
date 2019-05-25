package press

import (
	"../../config"
)


var tablename = "press"

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
									{
										Field: "pdfs",
										Input: "pdfs",
										Type: "image",
										FileFn: "pdfFile",
									},									
								}



type Press struct{
	Uuid string  `json:"uuid"`
	Title string  `json:"title"`
	Body string  `json:"body"`
	Image string  `json:"image"`
	Images []string  `json:"images"`
	Pdf string  `json:"pdf"`
	Pdfs []string  `json:"pdfs"`	
}

type Result struct {
	Status string `json:"status"`
	Err error `json:"error"`
	Data Press `json:"data"`
}

var result Result	
var press Press


// var imgixUrl = "https://bejoss.imgix.net/press/"
var imgixUrl = "/media/images/press/"