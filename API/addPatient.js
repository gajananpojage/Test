let Patient = require('../models/patients');
let mongoose = require('mongoose');
const bodyParser = require('body-parser');
let jwt = require('jsonwebtoken');
let config = require('../config');
const mongo = require('mongodb').mongoClient

const schema = mongoose.Schema;

module.exports = function(req,res, next) {
    const patient = new Patient({
        fname: req.body.fname,
        lname: req.body.lname,
        gender: req.body.gender,
        dob: req.body.dob,
        mobile: req.body.mobile,
        email: req.body.email,
        desc: req.body.desc,
        userId: req.body.userId
    });
    patient.save(function(error){
        if(error){
            return res.status(401).send(error);
        }
        res.send({status:'success'})
    })
}