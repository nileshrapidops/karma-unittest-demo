var express = require('express'),
	app = express();

var port = 9092;
app.use(express.static(__dirname+"/application"));
app.listen(port);
console.log("Server listing on port 9092");