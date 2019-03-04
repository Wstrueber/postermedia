const { user, password } = require('./credentials.json');

module.exports = {
  uri: `mongodb+srv://${user}:${password}@organizerdb-jtqp9.mongodb.net/test?retryWrites=true`,
};
