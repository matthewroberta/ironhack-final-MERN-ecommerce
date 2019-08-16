// import express because we need to use express router
const express = require('express')
const router = express.Router()

// importing from controllers into route
const { sayHi } = require('../controllers/user');

// create express method... first, takes route, second, takes method we have in controller... anything that comes to '/' (first) gets sent to second (controller)
router.get('/', sayHi);

// export router so we can use app.use in app.js
module.exports = router;