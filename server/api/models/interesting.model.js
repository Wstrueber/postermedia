const mongoose = require('mongoose');

const { Schema } = mongoose;

module.exports.Interesting = mongoose.model(
  'interesting',
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
