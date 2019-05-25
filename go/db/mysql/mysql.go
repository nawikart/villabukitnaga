package mysql

import (
	_ "github.com/go-sql-driver/mysql"
	"database/sql"
	"fmt"
)

func Connect() (*sql.DB, error) {
    db, err := sql.Open("mysql", "root:susanti@tcp(127.0.0.1:3306)/bukitnaga")

	if err != nil {
		fmt.Println(err)
        return nil, err
    }
    return db, nil
}

func GetLastId(table string) int64{
    db, _ := Connect()
	defer db.Close()
	
	var id int64
	res, _ := db.Exec(`INSERT INTO `+ table +` () VALUES()`)

	if res != nil {
		id, _ = res.LastInsertId()
	}
	return id
}

func GetLastUuid() string{
    db, _ := Connect()
	defer db.Close()
	
	var uuid string
	db.QueryRow("SELECT uuid()").Scan(&uuid)

	return uuid
}