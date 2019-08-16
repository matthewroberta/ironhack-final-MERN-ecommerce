// import express because we nee to use express router
const express = require('express')
const router = express.Router()

// create express method
router.get('/', (req, res) => {
  res.send("hello from node hew ecommerce MERN app - and now I'm in user.js!")
});

// export router so we can use app.use in app.js
module.exports = router;