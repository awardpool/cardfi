// This code is a way to set up a simple Express server. To use it, you need to install Express first and then save the code in a file. Then, you can run the file from the command line with the following command: node <filename>.js. Once the server is running, you can access it from a web browser by typing http://localhost:3300 into the address bar. The express.static() function is used to tell the server to serve the contents of the specified directory when requests for the URL are made. In this case, all of the files in the current directory will be available, as indicated by __dirname. Finally, the app.listen() function tells the server to listen for requests on the specified port (in this case, 3300).

var express = require("express");
var app = express();

app.use(express.static(__dirname));

app.listen("3300");
console.log("Running at\nhttp://localhost:3300");
