var express = require('express')
var app = express()
var path = require('path');
var ejs = require('ejs')

app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.set('port', process.env.PORT || 3000);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    req.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Methods", 'GET,PUT, POST, DELETE');
    next();
})

app.get('/', function(req, res) {
    res.end(ejs.render('Hello World'))
});

app.get('/peeps', function(req, res) {
    res.json({message: 'This is a peep'});
});

app.post('/peeps/new', function(req, res) {
    body = ""
    req.on('data', function(data) {
    body += data});
    req.on('end', function() {
        console.log("body:" + body);
    });
});
app.listen(3000)
