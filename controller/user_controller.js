const express = require("express");
const User = require("../model/user_model");
const bcrypt = require("bcrypt");
const user_service = require("../service/user_service");
const app = express();
app.use(express.json());
const createUser = async function (req, res) {
  try {
    const user = req.body;
    // console.log("inside create user");
    let result1 = new User(user);
    let result2 = await user_service.newUser(result1);
    res.status(201).send({ msg: "succesfully created a new user", result2 });
  } catch (err) {
    res.status(404).send(err.message);
  }
};

const userLogin = async function (req, res) {
  try {
    console.log("in userLogin");
    const { email, password } = req.body;
    const user = await user_service.getUserByEmail(email);
    // console.log(user.password);
    if (!user) {
      throw new Error("user does not exist");
    }
    const checkPassword = await bcrypt.compare(password, user.password);
    // console.log(checkPassword);
    // return checkPassword
    if (!checkPassword) {
      throw new Error("invalid credentials");
    }
    res.status(201).send({ msg: "user logged in succesfully " });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

module.exports = { createUser, userLogin };
