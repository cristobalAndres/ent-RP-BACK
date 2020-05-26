import * as admin from 'firebase-admin';

module.exports.ValidToken = async (req, res, next) => {
  admin.auth().verifyIdToken(req.body.token)
    .then(() => {
      next();
    }).catch((error) => {
      res.status(403).send('Unauthorized')
    });
}