var express = require('express');

var app = express();

var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json 
app.use(bodyParser.json())

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

var order = require('./api/routes/order-api');

app.use(express.static(__dirname + '/app'));

app.get('/', function (req, res) {
    res.redirect('/index.html');
});

// routes
var apiPath = "/api";

app.get(apiPath + '/orders', order.getOrders);
app.post(apiPath + '/updateOrder', order.updateOrder);


app.listen(process.env.PORT || 3000)

if (process.env.PORT === undefined) {
    console.log("Server Started at port : " + 3000);
}
else {
    console.log("Server Started at port : " + process.env.PORT);
}
