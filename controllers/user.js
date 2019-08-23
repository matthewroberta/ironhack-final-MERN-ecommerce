const User = require("../models/user");

// export method from controller to use in routes
exports.signup = (req, res) => {
//   console.log("req.body", req.body);
  const user = new User(req.body);
  console.log( user )
  user.save((err, user) => {
      if (err) {
          return res.status(400).json({
              err
          });
      }
      res.json({
          user
      });
  });
};