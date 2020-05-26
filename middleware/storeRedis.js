const redis = require("redis");
const client = redis.createClient();


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