const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  emailId: String,
  password: String
});

module.exports = mongoose.model('userInfo', userSchema);
