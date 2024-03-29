let jwt = require('jsonwebtoken');
const config = require('./config.js');

let checkToken =(req,res, next) => {
    //write your code here
    let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    console.log("success..auth");
    req.userId = decoded.id;
    next();
  });
};

module.exports ={
    checkToken: checkToken
}