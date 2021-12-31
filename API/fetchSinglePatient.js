let Patient = require('../models/patients');
let mongoose = require('mongoose');
const bodyParser = require('body-parser');
let jwt = require('jsonwebtoken');
let config = require('../config');
const mongo = require('mongodb').mongoClient

const schema = mongoose.Schema;

module.exports = function(req,res, next) {
    Patient.find({_id: req.body.patientId}, function(err, patient){
        if (err)
        res.status(401).send(err);
    
        if (patient) {
          console.log("Patient count : " + patient.length);
          res.status(200).send(patient)
        }
      });
}