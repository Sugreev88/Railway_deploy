const express = require("express");
const User = require("../model/user_model");
const user_service = require("../service/user_service");
const app = express();
app.use(express.json());
const createUser = async function (req, res) {
  try {
    const user = req.body;
    console.log("inside create user");
    let result1 = new User(user);
    let result2 = await user_service.newUser(result1);
    res.status(201).send({ msg: "succesfully created a new user", result2 });
  } catch (err) {
    res.status(404).send(err.message);
  }
};

module.exports = { createUser };
