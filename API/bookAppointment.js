let Appointment = require('../models/appointments');
let mongoose = require('mongoose');
const bodyParser = require('body-parser');
let jwt = require('jsonwebtoken');
let config = require('../config');
const mongo = require('mongodb').mongoClient

const schema = mongoose.Schema;

module.exports = function(req,res, next) {
    const appointment = new Appointment({
        fname: req.body.fname,
        lname: req.body.lname,
        disease: req.body.disease,
        priority: req.body.priority,
        AppointmentDate: req.body.AppointmentDate,
        patientId: req.body.patientId,
        bookingTime: req.body.bookingTime
    });
    appointment.save(function(error){
        if(error){
            return res.status(401).send(error);
        }
        res.send({status:'booked appointment!!',success: true})
    })
}