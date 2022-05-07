
// express used to generate local host
var express = require('express');

// child_process.exec allows you to execute shell script
var exec = require("child_process").exec;
var app = express();

// some formatting for app
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set port to 3001
var port = process.env.PORT || 3001;

// app.post
app.post('/', function (req, res) {
    // Executes shell script when request is posted to server
    // exec("/path/to/command/racket  /path/to/karp/file.karp")
    exec("/Applications/Racketv8.4/bin/racket /Users/jazzgobbo/Desktop/CS\\ 394/394\\ Client\\ project/example/3sat-to-iset-check-reduction.karp", function (err, stdout, stderr) {
        if (!err) {
            console.log(`${stdout}`)
            var output = JSON.stringify(stdout.split('\n'), null, "\t")
            output = JSON.parse(output)
            res.send(output);
        }
    });
});

// app.post("/", (req, res) => {
//     console.log("Connected to React");
//     res.redirect("/");
//   });

app.listen(port);
console.log('Listening on port ' + port);
