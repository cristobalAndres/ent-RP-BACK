import * as redis from 'redis';
const REDIS_PORT = process.env.REDISCLOUD_URL || 6379

module.exports.RedisStoreProducts = (req, res, next) => {
  const client = redis.createClient(REDIS_PORT);
  client.on("error", (error) => {
    console.error(error);
  });
  client.get('products', (err, response) => {
    if (err || response === null) {
      console.log('NO DATA PRODUCTS');
      next();
    } else {
      res.json(JSON.parse(response));
    }
  });
  client.quit();
}

module.exports.RedisStoreProductId = (req, res, next) => {
  const productId = req.params.id;
  const client = redis.createClient(REDIS_PORT);
  client.on("error", (error) => {
    console.error(error);
  });
  client.get(productId, (err, response) => {
    if (err || response === null) {
      console.log('NO DATA PRODUCT');
      next();
    } else {
      res.json(JSON.parse(response));
    }
  });
  client.quit();
}

module.exports.RedisSaveProducts = (req, res, next) => {
  const client = redis.createClient(REDIS_PORT);
  client.on("error", (error) => {
    console.error(error);
  });
  client.setex('products', 120, JSON.stringify(res.locals.products));
  res.json(res.locals.products);
  client.quit();
}

module.exports.RedisSaveProductId = (req, res, next) => {
  const productId = req.params.id;
  const client = redis.createClient(REDIS_PORT);
  client.on("error", (error) => {
    console.error(error);
  });
  client.setex(productId, 120, JSON.stringify(res.locals.product));
  res.json(res.locals.product);
  client.quit();
}