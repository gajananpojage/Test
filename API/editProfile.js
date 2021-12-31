let User = require('../models/user');
let mongoose = require('mongoose');
const bodyParser = require('body-parser');
let jwt = require('jsonwebtoken');
let config = require('../config');
const mongo = require('mongodb').mongoClient

const schema = mongoose.Schema;

module.exports = function(req,res, next) {
    //Both works findByIdAndUpdate and findOneAndUpdate
    //Record get updatedif youy check in DB but return old valuein response
    //To get updated record use {'new': true}
   /* User.findByIdAndUpdate(req.body.uid,
    {"email": req.body.email,"mobile": req.body.mobile,"location": req.body.location},{ 'new': true },
     function(err, result){
        if(err){
            res.send(err)
        }
        else{
            res.status(200).send(result)
        }

    })*/

    //Update by condition
   /* User.findOneAndUpdate({mobile:123456789},//condition
        {"location": req.body.location}, // data to be updated
         function(err, result){
            if(err){
                res.send(err)
            }
            else{
                res.status(200).send(result)
            }
    
        });*/
//UpdateAll 
User.updateMany({},
    {"location": req.body.location},
     function(err, result){
        if(err){
            res.send(err)
        }
        else{
            res.status(200).send(result)
        }

    });
}