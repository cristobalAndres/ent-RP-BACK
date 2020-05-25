const status = require('../controllers/status');

module.exports = (app) => {
  app.get('/status', status.status);
};
