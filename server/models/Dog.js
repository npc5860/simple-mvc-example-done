const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  breed: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    required: true,
  },

  createdDate: {
    type: Date,
    default: Date.now,
  },

});

const model = mongoose.model('Dog', schema);

module.exports = model;
