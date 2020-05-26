import { createServer } from 'http';
import express, { Router, json } from 'express';
import { json as _json, urlencoded } from 'body-parser';
let displayRoutes = require('express-routemap');
import * as admin from 'firebase-admin';
const fs = require('fs')

const C_FIREBASE = fs.existsSync('./ACCOUNT_FIREBASE.json' ) ? './ACCOUNT_FIREBASE.json' : process.env.ACCOUNT_FIREBASE;

admin.initializeApp({
  credential: admin.credential.cert(C_FIREBASE),
  databaseURL: "https://auth-3b4ef.firebaseio.com"
});

import coors from './coors';
import routers from './routers';

const app = express();
const router = Router();

app.use(_json({ limit: '100mb', extended: true }))
app.use(urlencoded({ limit: '100mb', extended: true }))
app.use(json());


coors(app)
routers(app)
displayRoutes(app)

const port = process.env.PORT || 8100
const server = createServer(app)
server.listen(port, (err) => {
  if (err) {
    console.log('Unable to listen for connections');
  }
  console.log('# Server started at', new Date().toISOString());
  console.log('# Running on port ', port);
})