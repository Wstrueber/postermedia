const http = require('http');
const database = require('./database');
const app = require('./app');
const { PORT } = require('./server.cfg');

const server = http.createServer(app);

server.listen(PORT, () => {
  database.start();
  console.log(`Server is running on port ${PORT}`);
});
