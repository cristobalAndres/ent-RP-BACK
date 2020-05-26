const redis = require("redis");
const REDIS_PORT = process.env.REDIS_URL || 6379
const client = redis.createClient(18606, "redis-18606.c17.us-east-1-4.ec2.cloud.redislabs.com");


async function Redis(req, res, next) {

  client.on("error", function (error) {
    console.error(error);
  });
  client.setex("llave", 30, "hola mundo");
  client.set("key", "value", redis.print);
  client.get("llave", redis.print);
  client.get("llave", (err, response) => {
    if (err || response === null) {
      resolve(err);
    } else {
      console.log('-----', response);
    }
  });

}
module.exports.Redis = Redis;