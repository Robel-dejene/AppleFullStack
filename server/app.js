// Question 1: Create a MySQL database by the name "myDB" and create a database user by
// the name "myDBuser" with a permissions to connect with the "myDB" database. Use the
// "mysql" module to create a connection with the newly created database. Display console
// message if the connection is successful or if it has an error.

const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");

var app = express();

// //for specific websites
const corsOption = {
	origin: [
		"http://localhost:3000",
		"http://www.evangadi.com",
		"http://www.apple.com",
	],
};
// // then pass it ot the following
app.use(cors(corsOption));
// app.use(cors());

//middle ware to extract info from the html.body attribute
app.use(
	express.urlencoded({
		extended: true,
	})
);

//middle ware to extract info from frontend that sent through json
app.use(express.json());

const port = 2024;
app.listen(2024, () => {
	console.log(`it is listening to port: ${port}`);
});

var connectmysql = mysql.createConnection({
	user: "myDBuser",
	password: "myDBuser",
	host: "127.0.0.1",
	database: "myDB",
});

connectmysql.connect((err) => {
	if (err) console.log(err);
	console.log("connected succesfully");
});

// Question 2: Here is a link to a document that contains the tables we need to create and
// convert the apple.com/iphones page into a dynamic page with a database. As you can see
// from the document, there are 5 tables that are needed (please scroll horizontally and
// vertically over the document to see all the 5 tables). Write a SQL query to create the
// apple.com tables inside of the "myDB" database you created above. Once you write the
// queries, use the "mysql" module to execute the queries on the database. Try both of these
// methods to initiate the execution of the queries:
// ● Include the execution code directly in the module to be executed as you run the app
// ● Use the Express module to receive requests. Configure your module in a way that it
// executes the queries when the "/install" URL is visited.

//to create the table when we run app.js without accessing the /install page in the browser
// let products = `CREATE TABLE if not exists products(
//     product_id int auto_increment,
//     product_url varchar(255) not null,
//     product_name varchar(255) not null,
//     PRIMARY KEY (product_id)
// )`;
// var productDescription = `CREATE TABLE  if not exists productDescription(
//         description_id int auto_increment,
//         product_id int(11) not null,
//         product_brief_description TEXT not null,
//         product_description TEXT not null,
//         product_img varchar(255) not null,
//         product_link varchar(255) not null,
//         PRIMARY KEY (description_id),
//         FOREIGN KEY (product_id) REFERENCES products(product_id)
//     )`;
// let productprice = `CREATE TABLE if not exists productprice(
//         price_id int auto_increment,
//         product_id int(11) not null,
//         starting_price varchar(255) not null,
//         price_range varchar(255) not null,
//         PRIMARY KEY (price_id),
//         FOREIGN KEY (product_id) REFERENCES products(product_id)
//     )`;
// let orders = `CREATE TABLE if not exists orders(
//         order_id int auto_increment,
//         product_id int(11) not null,
//         user_id int(11) not null,
//         PRIMARY KEY (order_id)
//     )`;
// let users = `CREATE TABLE if not exists users(
//         user_id int auto_increment,
//         user_name varchar(255) not null,
//         user_password varchar(255) not null,
//         PRIMARY KEY (user_id)
//     )`;
// connectmysql.query(products, (err, results, fields) => {
// 	if (err) console.log(err);
// });
// connectmysql.query(productDescription, (err, results, fields) => {
// 	if (err) console.log(err);
// });
// connectmysql.query(productprice, (err, results, fields) => {
// 	if (err) console.log(err);
// });
// connectmysql.query(orders, (err, results, fields) => {
// 	if (err) console.log(err);
// });
// connectmysql.query(users, (err, results, fields) => {
// 	if (err) console.log(err);
// });

app.get("/install", (err, res) => {
	//syntax for create

	// CREATE TABLE table_name(
	//     column1 datatype,
	//     column2 datatype,
	//     column3 datatype,
	//     .....
	// );

	let products = `CREATE TABLE if not exists products(
        product_id int auto_increment,
        product_url varchar(255) not null,
        product_name varchar(255) not null,
        PRIMARY KEY (product_id)
    )`;
	let productDescription = `CREATE TABLE  if not exists productDescription(
        description_id int auto_increment,
        product_id int(11) not null,
        product_brief_description TEXT not null,
        product_description TEXT not null,
        product_img varchar(255) not null,
        product_link varchar(255) not null,
        PRIMARY KEY (description_id),
        FOREIGN KEY (product_id) REFERENCES products(product_id)
    )`;
	let productprice = `CREATE TABLE if not exists productprice(
        price_id int auto_increment,
        product_id int(11) not null,
        starting_price varchar(255) not null,
        price_range varchar(255) not null,
        PRIMARY KEY (price_id),
        FOREIGN KEY (product_id) REFERENCES products(product_id)
    )`;
	let orders = `CREATE TABLE if not exists orders(
        order_id int auto_increment,
        product_id int(11) not null,
        user_id int(11) not null,
        PRIMARY KEY (order_id)
    )`;
	let users = `CREATE TABLE if not exists users(
        user_id int auto_increment,
        user_name varchar(255) not null,
        user_password varchar(255) not null,
        PRIMARY KEY (user_id)
    )`;
	connectmysql.query(products, (err, results, fields) => {
		if (err) console.log(err);
	});
	connectmysql.query(productDescription, (err, results, fields) => {
		if (err) console.log(err);
	});
	connectmysql.query(productprice, (err, results, fields) => {
		if (err) console.log(err);
	});
	connectmysql.query(orders, (err, results, fields) => {
		if (err) console.log(err);
	});
	connectmysql.query(users, (err, results, fields) => {
		if (err) console.log(err);
	});
	res.end("The table is created");
});

// Question 3: Create an HTML file called, “index.html” with a form to populate the
// "products" table you created above.
// ● The form on the HTML page should send a POST request to a URL named
// "/add-product"
// ● Use Express to receive the POST request
// ● Use the body-parser module to parse the POST request sent to your Express server
// ● Write a SQL query to insert the data received from the HTML form into the
// "products" table

// syntax for insert
// INSERT INTO table_name(
// 	column1, column2, column3, ...
// ) VALUES (
// 	value1, value2, value3, ...
// )

app.post("/addiphones", (req, res) => {
	console.log(req.body);

	const {
		product_url,
		product_name,
		product_brief_description,
		product_description,
		product_img,
		product_link,
		starting_price,
		price_range,
	} = req.body;

	let insetProduct =
		"INSERT INTO products (product_url, product_name) VALUES (?, ?)";
	let insertDescription =
		"INSERT INTO productdescription (product_id, product_brief_description, product_description, product_img, product_link) VALUES (?, ?, ?, ?, ?)";
	let insertPrice =
		"INSERT INTO productprice (product_id, starting_price, price_range) VALUES (?, ?, ?)";

	connectmysql.query(
		insetProduct,
		[product_url, product_name],
		(err, results, fields) => {
			if (err) console.log(`Error Found: ${err}`);
			console.table(results);
			const id = results.insertId;
			//connectmysql.query(insertDescription, [the names are from the index.html on the input tag which is name]
			connectmysql.query(
				insertDescription,
				[
					id,
					product_brief_description,
					product_description,
					product_img,
					product_link,
				],
				(err, results, fields) => {
					if (err) console.log(`Error Found: ${err}`);
					console.table(results);
				}
			);
			connectmysql.query(
				insertPrice,
				[id, starting_price, price_range],
				(err, results, fields) => {
					if (err) console.log(`Error Found: ${err}`);
					console.table(results);
				}
			);
		}
	);
	res.end("it is working");
});

app.get("/info", (req, res) => {
	connectmysql.query(
		"SELECT * FROM products JOIN productDescription JOIN productprice ON  products.product_id = productDescription.product_id AND products.product_id = productprice.product_id",
		(err, rows, fields) => {
			let iphones = { products: [] };
			iphones.products = rows;
			var stringIphones = JSON.stringify(iphones);
			if (!err) res.end(stringIphones);
			else console.log(err);
			///////////////////////////////////////////////////////////////////////////////
			// if (err) console.log("Error During Selection", err);
			// res.send(rows);
		}
	);
});

// selecting specific columns

// from products table product_name
// from productdescription table product_description
// from productprice table starting_price and price_range

app.get("/information", (req, res) => {
	connectmysql.query(
		"SELECT products.product_id AS id, products.product_name, productdescription.product_description, productprice.starting_price, productprice.price_range FROM products JOIN productDescription JOIN productprice ON  products.product_id = productDescription.product_id AND products.product_id = productprice.product_id",
		(err, results, fields) => {
			if (err) console.log("Error During Selection", err);
			res.send(results);
		}
	);
});
