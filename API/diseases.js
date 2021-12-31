let Diseases = require('../models/diseases');
let mongoose = require('mongoose');
const bodyParser = require('body-parser');
let jwt = require('jsonwebtoken');
let config = require('../config');
const mongo = require('mongodb').mongoClient

const schema = mongoose.Schema;

module.exports = function(req,res, next) {
    Diseases.find({}, function(err, diseases){
        if (err)
            return done(err);
    
        if (diseases) {
          console.log("diseases count : " + diseases.length);
          res.send(diseases)
        }
      });
}