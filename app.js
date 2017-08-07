const express = require('express');
const bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = express();


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true}));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.render('index', {
		pageTitle: "Home"
	});
});

app.get("/about", (req, res) => {
	res.render('about', {
		pageTitle: "About"
	});
});

app.get("/friends", (req, res) => {
	res.render('friends', {
		pageTitle: "Friends"
	});
});

app.get("/portfolio", (req, res) => {
	res.render('portfolio', {
		pageTitle: "Portfolio"
	});
});


app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});