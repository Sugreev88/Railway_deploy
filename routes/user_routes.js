const express = require("express");
const router = express.Router();
const { createUser, userLogin } = require("../controller/user_controller");

router.route("/createUser").post(createUser);
router.route("/user/login").post(userLogin);

module.exports = router;
