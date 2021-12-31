let Appointment = require('../models/appointments');
let mongoose = require('mongoose');
const bodyParser = require('body-parser');
let jwt = require('jsonwebtoken');
let config = require('../config');
const mongo = require('mongodb').mongoClient

const schema = mongoose.Schema;

module.exports = function(req,res, next) {
    Appointment.find({patientId: req.body.patientId}, function(err, appointments){
        if (err)
            return done(err);
    
        if (appointments) {
          console.log("appointments count : " + appointments.length);
          res.send(appointments)
        }
      });
}