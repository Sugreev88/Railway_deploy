const mongoose = require("mongoose");
const User = require("../model/user_model");

const newUser = async function (user) {
  try {
    let result = await user.save();
    return result;
  } catch (err) {
    throw err;
  }
};

const getUserByEmail = async function (email) {
  try {
    const emailid = email;
    let result = await User.findOne({ email: emailid });
    // console.log(result);
    return result;
  } catch (err) {
    throw err;
  }
};

module.exports = { newUser, getUserByEmail };
