'use strict';
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var router = express.Router();
var app = express();

var SENDGRID_API_KEY='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'
var MAIL_TO=''


function sendEmail(data) {

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(SENDGRID_API_KEY);
    const msg = {
      to: 'contact@sppyns.io',
      from: 'contact@sppyns.io',
      subject: 'Formularios site sppyns-co',
      text: 'and easy to do anywhere, even with Node.js'
    };
    sgMail.send(msg);


}

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.set('view engine', 'html');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

router.get('/', function (req, res) {
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

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
    //sendEmail();
});
