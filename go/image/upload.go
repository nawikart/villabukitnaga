package image

import (
	"strings"
	"strconv"
	"time"
	"net/http"
	"os"
	"io"
	"fmt"
)


func Upload(w http.ResponseWriter, r *http.Request, inputfile string, tag string, id string, dir string) ([]string, error) {
	formdata := r.MultipartForm

	var fns []string
	var err error

	// GET OLD FILES
	if r.Form[inputfile + "OLD"] != nil {
		oldFiles := r.Form[inputfile + "OLD"]
		for i := 0; i < len(oldFiles); i++ {
			fns = append(fns, oldFiles[i])
		}
	}

	// DELETED FILES
	if r.Form[inputfile + "DELETED"] != nil {
		deletedFiles := r.Form[inputfile + "DELETED"]
		for i := 0; i < len(deletedFiles); i++ {
			// fmt.Println(dir + deletedFiles[i])
			err := os.Remove("." + dir + deletedFiles[i])
			if err != nil {
				// fmt.Println(err)
			}
		}
	}	

	if formdata.File[inputfile] != nil {
		files := formdata.File[inputfile]
		for i := 0; i < len(files); i++ {
			imagefile := files[i]

			fn := imagefile.Filename
			fnSplit := strings.SplitN(fn, ".", 2)
			ext := fnSplit[(len(fnSplit) - 1)]
			fn = tag + "-" + id + "-" + strconv.FormatInt(time.Now().Unix(), 10) + "-" + strconv.Itoa(i) + "." + ext
			file, err := imagefile.Open()
			defer file.Close()
			if err != nil {
				fmt.Fprintln(w, err)
				return fns, err
			}

			out, err := os.Create("." + dir + fn)
			defer out.Close()
			if err != nil {
				// fmt.Println(err)
				fmt.Fprintf(w, "Unable to create the file for writing. Check your write access privilege")
				return fns, err
			}
			_, err = io.Copy(out, file)
			if err != nil {
				// fmt.Println(err)
				fmt.Fprintln(w, err)
				return fns, err
			}

			fns = append(fns, fn)
		}
	}
		
	return fns, err
}