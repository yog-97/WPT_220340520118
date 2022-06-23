
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());


const bodyParser = require('body-parser');

let dbparams = {
	host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'pleasework',
	port:3306
};

const mysql = require("mysql2");
const con = mysql.createConnection(dbparams);

// let bookid = "101";



app.use(express.static('abc'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
//whether you want nested objects support  or not



app.get('/poc1', function (req, res) {
		let input = req.query.a;
		console.log(input);
		let output = {bookstatus: false};
	
		// console.log("reading input " + req.body.v1 +  "  second " + req.body.v2)
		
    	// var xyz ={ v1:37, v2:35};
		con.query("select * from book where bookid = ?", [input], (err, res1) => {
			// if (err) {
			// 	result = err;
			// 	console.log("trouble " + result);
			// } else{
			if(res1.length>0){	
				result = res1;
				console.log("success" + result)
				output.bookstatus=true;
				output.bookstatus= res1;
			}
			// console.log(res1[0]);
			res.send(output);
			// console.log("38 " + );
			// res.send(result);
		});
       
    });

	app.get('/poc2', function (req, res) {
		let q = req.query.x;
		let w = req.query.y;
		let e = req.query.z;
		console.log(q + "" + w + "" + e);
		let output = {bookstatus: false};
	
		// console.log("reading input " + req.body.v1 +  "  second " + req.body.v2)
		
    	// var xyz ={ v1:37, v2:35};
		con.query("update book set prize=?, where bookid=?", [z,x], (err, res1) => {
			// if (err) {
			// 	result = err;
			// 	console.log("trouble " + result);
			// } else{
			if(res1.affectedRows>0){	
				result = res1[0];
				console.log("success" + result)
				output.bookstatus=true;
				output.bookstatus=res1;
			}
			// console.log(res1[0]);
			res.send(output);
			// console.log("38 " + );
			// res.send(result);
		});
       
    });	


// app.get('/poc2', function (req, res) {
    
	
//         console.log("reading input " + req.query.xyz);
		
//     	var xyz ={ v1:37, v2:35};

// 		res.send(xyz);

// 		});




app.listen(100, function () {
    console.log("server listening at port 8081...");
});