require("dotenv").config(); // load .env

const isDevelopment = (req, res, next) => {
    if (process.env.NODE_ENV !== 'production') {
      next();
    } else {
      res.status(403).send({ message: "Access denied: Not in this environment"});
    }
  };
  
  module.exports = isDevelopment;
  