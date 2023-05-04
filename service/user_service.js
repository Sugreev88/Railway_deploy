const mongoose = require("mongoose");

const newUser = async function (user) {
  try {
    let result = await user.save();
    return result;
  } catch (err) {
    throw err;
  }
};

module.exports = { newUser };
