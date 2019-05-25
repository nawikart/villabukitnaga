package email

type Result struct {
	Status string `json:"status"`
	Err error `json:"error"`
}

var result Result	