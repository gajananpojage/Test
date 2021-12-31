let Appointment = require('../models/appointments');
let mongoose = require('mongoose');
const bodyParser = require('body-parser');
let jwt = require('jsonwebtoken');
let config = require('../config');
const mongo = require('mongodb').mongoClient

const schema = mongoose.Schema;

module.exports = function(req,res, next) {
    //tested both working deleteOne and deleteMany and remove(it remove all records)
    //Appointment.deleteOne({fname: req.body.fname}).then(   
    //Appointment.deleteMany({priority: req.body.priority}).then(
    Appointment.remove({}).then(
        ()=>{
            res.status(200).json({
                message:'Deleted!'
            });
        }
    ).catch((err)=>{res.status(400).json({
        error:err
    });


    });
}