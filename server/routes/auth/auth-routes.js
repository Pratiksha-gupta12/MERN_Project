const express = require('express')
const {registerUser , loginUser} = require('../../controllers/auth/auth-controller')

const router = express.Router();

router.post("/register" , registerUser);
router.post("/rlogin" , loginUser);

module.exports = router;

