'use strict';
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var router = express.Router();
var app = express();
const sgMail = require('@sendgrid/mail');
require('dotenv').load();

var SENDGRID_API_KEY= process.env.SENDGRID_API_KEY
var MAIL_TO= process.env.MAIL_TO
var MAIL_FROM= process.env.MAIL_FROM

function sendEmail(data) {
   
    sgMail.setApiKey(SENDGRID_API_KEY);
    const msg = {
      to: MAIL_TO,
      from: MAIL_FROM,
      subject: 'Formularios site sppyns-co',
      text: JSON.stringify(data)
    };
    return sgMail.send(msg);


}

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.set('view engine', 'html');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


router.post('/sendEmail', function (req, res) {

    sendEmail(req.body).then((data) => {
        console.log(data);
        res.status(200).send({status: 'success'})
    })
} )


router.get('*', function (req, res) {
    res.status(200).render(path.join(__dirname, 'public', '/index.html'));
});
app.use('/', router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500).send({
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500).send( {
        message: err.message,
        error: {}
    });
});



if(!process.env.IS_FUNCTION){
    app.set('port', process.env.PORT || 3000);

    var server = app.listen(app.get('port'), function () {
        console.log('Express server listening on port ' + server.address().port);
        //sendEmail();
    });
} else {
    exports.sppyns = app;
}

