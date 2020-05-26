const { ValidToken } = require('../middleware/validToken');
const { RedisSaveProducts, RedisSaveProductId, RedisStoreProducts, RedisStoreProductId } = require('../middleware/storeRedis');
const { GetProducts, GetProductId } = require('../middleware/products');

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
