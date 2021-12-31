let Appointment = require('../models/appointments');
let mongoose = require('mongoose');
const bodyParser = require('body-parser');
let jwt = require('jsonwebtoken');
let config = require('../config');
const mongo = require('mongodb').mongoClient
const singlePatientAppointMent = require('./singlePatientAppointments');
const schema = mongoose.Schema;

module.exports = function(req,res, next) {
    if(req.body.patientId){
     return singlePatientAppointMent(req, res,next); 
    } else {
    Appointment.find({}, function(err, appointments){
        if (err)
            return done(err);
    
        if (appointments) {
          console.log("appointments count : " + appointments.length);
          res.send(appointments)
        }
      });
    }
}