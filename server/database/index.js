const mongoose = require('mongoose');

const { uri } = require('./mongo.cfg');

const { connect, connection } = mongoose;

module.exports = {
  start: () => {
    connect(
      uri,
      { useNewUrlParser: true },
    );
    connection.on('connected', () => console.log('MongoDB: connected to database.'));
    connection.on('error', err => console.log(`MongoDB: ${err}`));
    connection.on('disconnected', () => console.log('MongoDB: disconnected.'));
  },
};
