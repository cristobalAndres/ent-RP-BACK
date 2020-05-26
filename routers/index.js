const { Status } = require('../controllers/status');
const { ValidToken } = require('../middleware/validToken');
const { RedisSaveProducts, RedisSaveProductId, RedisStoreProducts, RedisStoreProductId } = require('../middleware/storeRedis');
const { GetProducts, GetProductId } = require('../middleware/products');

// const middlewares = [];
// middlewares.push(Status);
// middlewares.push(Status);

module.exports = (app) => {
  app.post('/products',
    ValidToken,
    RedisStoreProducts,
    GetProducts,
    RedisSaveProducts,
  );
  app.post('/product/:id',
    ValidToken,
    RedisStoreProductId,
    GetProductId,
    RedisSaveProductId,
  );
};
