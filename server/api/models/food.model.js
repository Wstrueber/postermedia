const mongoose = require('mongoose');

const { Schema } = mongoose;

module.exports.Food = mongoose.model(
  'food',
  new Schema({
    url: {
      type: String,
      required: [true, 'url required'],
    },
    comments: {
      type: String,
      required: [true, 'comments required'],
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
  }),
);
