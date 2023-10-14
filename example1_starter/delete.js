const mysql = require('mysql2')

const connection = mysql.createConnection({
    host : "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "mydb"
})

connection.connect((err)=>{
    if (err)console.log(err);
    console.log("connected");

    const query = `DELETE FROM account WHERE id=1;`
    connection.query(query,(err,result)=>{
        if (err)console.log(err);
        console.log(result);
        connection.end()
    })

})