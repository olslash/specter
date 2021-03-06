var express = require('express');
var userController = require('./user.controller.js');

var users = express.Router();

users.get('/login/:fbid', function(req, res){
  req.body.fbid = req.params.fbid;
  userController.login(req, res)
});

users.post('/login', function(req, res){
  userController.login(req, res);
});

users.get('/:fbid', function(req, res){
  userController.getOne(req, res);
});

module.exports = users;
