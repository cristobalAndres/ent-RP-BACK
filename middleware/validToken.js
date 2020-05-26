const admin = require('firebase-admin');

// validación de token para Login
// module.exports = (app) => {
//   app.get('/validate-login/:token', (req, res) => {
//     if (req.params.token) {
//       admin.auth().verifyIdToken(req.params.token)
//         .then((resp) => {
//           res.json('valid');
//         }).catch((error) => {
//           res.status(403).send('Unauthorized')
//         });
//       } else {
//         res.status(403).send('Unauthorized')
//       }
//   });
// };



async function ValidToken(req, res, next) {
  console.log(req.body.token);
  admin.auth().verifyIdToken(req.body.token)
    .then((resp) => {
      res.json('valid');
    }).catch((error) => {
      res.status(403).send('Unauthorized')
    });
}
module.exports.ValidToken = ValidToken;