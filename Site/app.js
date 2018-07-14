var express = require('express');
var cookieParser = require('cookie-parser');
var path = require('path');
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("public"));


app.use('/action', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/action.html'));
});

app.use('/index', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.use('/', function (req, res) {
    res.redirect('/index')
});

app.listen(PORT, () => {
    console.log('Serveur sur port:', PORT)
})


module.exports = app;