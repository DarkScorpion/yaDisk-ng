'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var compression = require('compression')

var indexHtml = require('fs').readFileSync(__dirname + '/index.html', 'utf8');

var apiRoutes = require('./api/index.js');
var passport = require('./lib/passport.js');

app.disable('x-powered-by'); //disable headers with platform name
app.use( express.static(__dirname + '/../build/') );
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );
app.use( require('express-session')( require('../config.js').session) );
app.use( passport.initialize() );
app.use( passport.session() );
app.use( compression({ threshold: '32 kB' }) );
app.use( require('./lib/logMiddleware.js') );

app.use('/api/v1', apiRoutes);

app.get('/auth/yandex',
  passport.authenticate('yandex'),
  (req, res) => {}
);

app.get('/auth/yandex/callback',
  passport.authenticate('yandex', { failureRedirect: '/login' }),
  (req, res) => { res.redirect('/disk'); }
);

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

app.get('/*', (req, res) => {
  res.send(indexHtml);
});

app.all('*', (req, res) => {
  res.status('404').send('Page not found');
});

module.exports = app;
