const User = require("../models/user");
const {errorHandler} = require('../helpers/dbErrorHandler')

// export method from controller to use in routes
exports.signup = (req, res) => {
//   console.log("req.body", req.body);
  const user = new User(req.body);
  console.log( user )
  user.save((err, user) => {
      if (err) {
          return res.status(400).json({
              err: errorHandler(err)
          });
      }
      // these user.__ = undefined will prevent these things froom passing into saved user
      user.salt = undefined;
      user.hashed_password = undefined;
      res.json({
          user
      });
  });
};