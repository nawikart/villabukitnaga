package admin


type Admin struct{
	Uuid string  `json:"uuid"`
	Name string  `json:"name"`
	Uname string  `json:"uname"`
	Email string  `json:"email"`
	Phone string  `json:"phone"`
	Password string  `json:"password"`
}

type Result struct {
	Status string `json:"status"`
	Err error `json:"error"`
	Err2 []string `json:"error2"`
	Data Admin `json:"data"`
}

var result Result	
var admin Admin

// var dir = "/media/images/admin/"
// var imgixUrl = "https://bejoss.imgix.net/admin/"