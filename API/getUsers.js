let User = require('../models/user');
let mongoose = require('mongoose');
const bodyParser = require('body-parser');
let jwt = require('jsonwebtoken');
let config = require('../config');
const mongo = require('mongodb').mongoClient

const schema = mongoose.Schema;

module.exports = function(req,res, next) {
    User.find({}, function(err, Users){
        if (err)
            return done(err);
    
        if (Users) {
          console.log("Users count : " + Users.length);
          res.send({userCount:Users.length})
        }
      });
}