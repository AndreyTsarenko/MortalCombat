var config = require('./ServerConfig');
var express = require('express');
var bodyParser = require('body-parser');
var templater = require('ejs-locals');
var app = express();
app.listen(config.port);

app.engine('ejs', templater);
app.set('views', __dirname + '/templates');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());
// parse application/json
app.use(bodyParser.json());
// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
/**
 *
 */
app.use(function (req, res, next) {
    var url = 'index';
    switch (req.url) {
        case '/login-user':

        case '/':
            res.render('index', {
                magic: 'hi'
            });
            break;
        case '/login':
            res.render('login');
            break;
        case '/registration':
            res.render('registration');
            break
    }
    next();
});
app.use(function (req, res) {
    res.end('Page not found');
});

