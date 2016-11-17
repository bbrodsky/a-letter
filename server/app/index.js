'use strict';
var path = require('path');
var express = require('express');
var app = express();
var request = require('request');
var passport = require('passport')
  , TwitterStrategy = require('passport-twitter').Strategy;

var Letter = require('../db/models')


module.exports = app;

// Pass our express application pipeline into the configuration
// function located at server/app/configure/index.js
require('./configure')(app);

// Routes that will be accessed via AJAX should be prepended with
// /api so they are isolated from our GET /* wildcard.
// app.use('/api', require('./routes'));


/*
 This middleware will catch any URLs resembling a file extension
 for example: .js, .html, .css
 This allows for proper 404s instead of the wildcard '/*' catching
 URLs that bypass express.static because the given file does not exist.
 */
app.use(function (req, res, next) {

    if (path.extname(req.path).length > 0) {
        res.status(404).end();
    } else {
        next(null);
    }

});
// app.use(passport.initialize());
// app.use(passport.session());
// app.use('/auth', require('../auth'));


app.get('/api/:id' , (req,res) => {
  Letter.findOne({
    where: req.params
  })
  .then(letter => res.json(letter))
})

app.get('/location', (req,res) => {
  request('http://freegeoip.net/json/' + req.connection.remoteAddress, (error, response, body) => {
    res.send(response.body);
  })
})

app.post('/send', function (req, res, next) {
  Letter.create(req.body)
  .then(function (story) {
    return story;
  })
  .then(function (story) {
    res.status(201).json(story);
  })
  .catch(next);
});

app.get('/:id',function(req,res, next) {
  Letter.findById(req.params.id)
  .then( (id) => {
    if (!id) {
      const err = Error('Letter not found');
      err.status = 404;
      throw err
    } else {
      res.sendFile(app.get('letterHTMLPath'));
    }
  })
  .catch(next);
})


app.get('/*', function (req, res) {
    res.sendFile(app.get('indexHTMLPath'));
});


// Error catching endware.
app.use(function (err, req, res, next) {
    console.error(err, typeof next);
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});
