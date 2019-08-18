const User = require('../models/user')


// export method from controller to use in routes
exports.signup = (req, res) => {
  console.log("req.body", req.body);
  const user = new User(req.body);

  // callback function to save user that will either give us err or the user to save to database
  user.save((err, user) => {
    if(err) {
      return res.status(400).json({
        err
      })
    }
    res.json({
      user
    });
  });
};