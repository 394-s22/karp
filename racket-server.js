// express used to generate local host
var express = require('express');

// child_process.exec allows you to execute shell script
var exec = require("child_process").exec;
var app = express();

// some formatting for app
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
// change this ^ to receive JSON Array

// set port to 3001
var port = process.env.PORT || 3001;

// Instance of a file system
var fs = require('fs');
const { Console } = require('console');

// Getting around CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next()
});

// app.post
app.post('/', function (req, res) {

    var data = req.body;
    console.log(data);

    fs.writeFileSync("test-module.rkt", data);

    // Executes shell script when request is posted to server
    // exec("/path/to/command/racket  /path/to/karp/file.karp")

    // MAKE SURE YOUR LOCAL FILE PATH IS CORRECT IF SERVER INTERACTION IS NOT WORKING
    exec("/Applications/Racketv8.4/bin/racket test-module.rkt", function (err, stdout, stderr) {
        if (!err) {
            console.log(`${stdout}`)
            res.send(stdout);
        }
        else{
            console.log(err);
        }
    });
});

// app.post("/", (req, res) => {
//     console.log("Connected to React");
//     res.redirect("/");
//   });

app.listen(port);
console.log('Listening on port ' + port);
