// class Status {
//   static async status(req, res) {
//     res.status(200).json({ status: 'OK' });
//   }
// }

// module.exports = Status;


async function Status(req, res, next) {
  return res.status(200).json({ status: 'OK' });
}
module.exports.Status = Status;
