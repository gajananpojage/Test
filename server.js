const express = require('express');
const bodyParser =require('body-parser');
let middleware = require('./middleware');
let path= require('path');

let mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/PatientManagement', {useNewUrlParser: true},(err) => {
    if(!err){
        console.log('connected to Db');
    } else {
        console.log("Error in db connection: "+err);
    }
});

function main() {
    let app = express();
    let handlers = require('./handlers/handler.js');
     const port = 8080;
     app.use(bodyParser.urlencoded({extended: true}));
     app.use(bodyParser.json());
     app.use(function(req,res,next){
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type, Accept,authorization');
        next();
     });

     app.post('/login',handlers.login);
     app.post('/register',handlers.register);
     app.get('/fetchUsers',middleware.checkToken,handlers.fetchUsers);
     app.post('/addPatient',middleware.checkToken,handlers.addPatient); 
     app.get('/fetchPatient',middleware.checkToken,handlers.fetchPatient);    
     app.get('/fetchSinglePatient',middleware.checkToken,handlers.fetchSinglePatient);
     app.put('/editProfile', middleware.checkToken,handlers.editProfile);   
   
     app.get('/diseases',handlers.diseases);
     app.post('/bookAppointment', middleware.checkToken,handlers.bookAppointments);
     app.get('/fetchAppointment', middleware.checkToken,handlers.fetchAppointment);
     app.delete('/deleteAppointment', middleware.checkToken,handlers.deleteAppointment);
     app.get('/singlePatientAppointments', middleware.checkToken,handlers.singlePatientAppointments);
     app.get('/getProfile', middleware.checkToken,handlers.getProfile);
     //add more handlers 

     app.get('/', (req, res) => {
         res.send('Hello..');
     })
     app.listen(port, () => console.log(`server is listening on port: ${port}`));

}
main();