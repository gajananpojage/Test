let User = require('../models/user');
let mongoose = require('mongoose');
const bodyParser = require('body-parser');
let jwt = require('jsonwebtoken');
let config = require('../config');
const mongo = require('mongodb').mongoClient

const schema = mongoose.Schema;

module.exports = function(req,res, next) {
    User.findOne({userName: req.body.uname}, function(err, user){
       if(err) throw err;
       if(!user || (user.pwd !== req.body.pwd)) {
           return res.status(401).json({message:'Authentication failed. Invalid uName or pwd ' })
       }
       var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });
       res.status(200).send({success:true,message:'Authentication successful',uid:user.id, accessToken: token});
    });
}