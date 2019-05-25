package mysql

import (
	"net/http"
	"strings"
	"../../config"
	"encoding/json"
	// "fmt"
)

func SqlUpdate(r *http.Request, tablename, uuid string, fields []config.DataModel) string{
	str := `UPDATE `+ tablename +` SET `
	var fs []string
	var val string
	for i := 0; i < len(fields); i++ {
		if r.Form[fields[i].Input] != nil {
			if fields[i].Type == "image" {
				b, _ := json.Marshal(r.Form[fields[i].Input])
				// fmt.Println(string(b))
				val = string(b)
			}else{
				val = r.Form[fields[i].Input][0]
			}
			fs = append(fs, (fields[i].Field + ` = '` + strings.TrimSpace(val) + `'`))
		}
	}
	str = str + strings.Join(fs, `, `) + ` WHERE uuid = '`+ uuid + `'`
	return str
}

// func SqlInsert(r *http.Request, tablename string, fields []config.DataModel) string{
// 	str := `INSERT INTO `+ tablename +` `
// 	var fs, vs []string
// 	for i := 0; i < len(fields); i++ {
// 		if r.Form[fields[i].Input] != nil {
// 			fs = append(fs, fields[i].Field)
// 			vs = append(vs, `'`+ strings.TrimSpace(r.Form[fields[i].Input][0]) +`'`)
// 		}
// 	}

// 	str = str + `(`+ strings.Join(fs, `, `) +`) VALUES (`+ strings.Join(vs, `, `) +`)`
// 	return str
// }