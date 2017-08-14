const express = require('express'),
	bodyParser = require('body-parser'),
	cors = require('cors'),	//prevents No 'Access-Control-Allow-Origin' header is present on the requested resource.
	app = express(),
	port = 8080,
	textboxRouter = require('./routes/textboxRoutes');

app.use(bodyParser.urlencoded({ extended: false })); // or true?
app.use(bodyParser.json());
app.use(cors());

textboxRouter(app);

app.listen(port);
console.log('Your server is running on port ' + port + '.');