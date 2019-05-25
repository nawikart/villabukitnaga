package crud

type Result struct {
	Status string `json:"status"`
	Err error `json:"error"`
	Err2 []string `json:"error2"`
}

var result Result	

var dirImage = "/media/images/"