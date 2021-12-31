let User = require('../models/user');
let mongoose = require('mongoose');
const bodyParser = require('body-parser');
let jwt = require('jsonwebtoken');
let config = require('../config');
const mongo = require('mongodb').mongoClient

const schema = mongoose.Schema;

module.exports = function(req,res, next) {
    const user = new User({
        userName: req.body.uname,
        pwd: req.body.pwd,
        mobile: req.body.mobile,
        email: req.body.email,
        location: req.body.location
    });
    user.save(function(error){
        if(error){
            console.log(error);
        }
        res.send({status:'success'})
    })
}