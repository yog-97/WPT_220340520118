const express = require('express');
const app = express();

let dbparams = {
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'wpt',
    port: 3306
};

const mysql = require('mysql2');
const con = mysql.createConnection(dbparams);

app.use(express.static("abc"));


app.get("/getbook", (req, resp) => {
    let input = req.query.x;
    console.log(input);
    let output = { bookfoundstatus: false };
    con.query("select * from book where bookid =?", [input], (error, rows) => {
        if (rows.length > 0) {
            console.log("its working");
            console.log(rows[0]);
            output.bookfoundstatus = true;
            output.bookdetails = rows[0];
        }
        resp.send(output);
    });
});


app.get("/add", (req, resp) => {
    let empno = req.query.a;
    let ename = req.query.b;
    let deptno = req.query.c;
    // let input={itemno:req.query.a,itemname:req.query.b,price:req.query.c};
    console.log(bookid);
    let output = { bookfoundstatus: false };
    con.query("insert into book (bookid,bookname,price) values(?,?,?)",
        [bookid, bookname, price],
        (error, rows) => {
            if (rows.affectedRows > 0) {
                output.empfoundstatus = true;
            }
            resp.send(output);
        }
    );
});

app.get("/update", (req, resp) => {
    let empno = req.query.a;
    let empname = req.query.b;
    let deptno = req.query.c;
    let output = { bookfoundstatus: false };
    con.query(
        "update book set bookname=?, price=? where bookid=?",
        [bookname, price, bookid],
        (error, rows) => {
            if (rows.affectedRows > 0) {
                output.bookfoundstatus = true;
            }
            resp.send(output);
        }
    );
});


app.listen(8081, () => {
    console.log("server!!");
});
