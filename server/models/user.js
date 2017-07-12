const mongoose = require('mongoose');

let User = mongoose.model('User', {
  email: {
    type: String,
    trim: true,
    minlength: 1
  }
});

module.exports = {User};