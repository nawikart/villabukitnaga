package about_bali

import (
	"../../config"
)


var tablename = "about_bali"

var fields = []config.DataModel{
									{
										Field: "body1",
										Input: "body1",
										Type: "string",
									},
									{
										Field: "body2",
										Input: "body2",
										Type: "string",
									},
								}



type AboutBali struct{
	Uuid string  `json:"uuid"`
	Body1 string  `json:"body1"`
	Body2 string  `json:"body2"`
}

type Result struct {
	Status string `json:"status"`
	Err error `json:"error"`
	Data AboutBali `json:"data"`
}

var result Result	
var about_bali AboutBali

var imgixUrl = "https://bejoss.imgix.net/about_bali/"
