const express = require("express");
const router = express.Router();
const { createUser } = require("../controller/user_controller");

router.route("/createUser").post(createUser);

module.exports = router;
