'use strict';

var path = require('path');
var express = require('express');
var favicon = require('serve-favicon');
var passport = require('passport')

module.exports = function (app) {

  var root = app.getValue('projectRoot');

  var npmPath = path.join(root, './node_modules');
  var publicPath = path.join(root, './public');
  var browserPath = path.join(root, './browser');

  app.use(favicon(app.getValue('faviconPath')));
  app.use(express.static(npmPath));
  app.use(express.static(publicPath));
  app.use(express.static(browserPath));
  app.use('/bootstrap', express.static(npmPath + '/bootstrap/dist'));
  app.use('/jquery', express.static(npmPath + '/jquery/dist'))



};
