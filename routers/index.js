const { Status } = require('../controllers/status');
const { ValidToken } = require('../middleware/validToken');
const { Redis } = require('../middleware/storeRedis');

// const middlewares = [];
// middlewares.push(Status);
// middlewares.push(Status);

module.exports = (app) => {
  app.get('/',
  // Redis,
  ValidToken);
};
