// const axios = require('axios');
import * as axios from 'axios';

const GetProducts = (req, res, next) => {
  if ((Math.random() * 100) < 15) {
    console.log('ERROR GET DATA PRODUCTS')
    GetProducts(req, res, next);
  } else {
    const products = '2000376105130P,477459,2000349423834P,2000374373623P,2000378039990P,2000377739068P,2000378433996P,2000362019298P,2000379038664,MPM00000036767,2000359510722P,2000366737211P';
    return axios.get(`https://simple.ripley.cl/api/v2/products?partNumbers=${products}`)
      .then(response => {
        res.locals.products = response.data;
        next();
      })
      .catch(error => {
        console.log('ERROR', error);
      });
  }
}

const GetProductId = (req, res, next) => {
  if ((Math.random() * 100) < 15) {
    console.log('ERROR GET DATA PRODUCT')
    GetProductId(req, res, next);
  } else {
    const productId = req.params.id;
    return axios.get(`https://simple.ripley.cl/api/v2/products/${productId}`)
      .then(response => {
        res.locals.product = response.data;
        next();
      })
      .catch(error => {
        console.log('ERROR:', error);
        res.status(503);
      });
  }
}

module.exports.GetProducts = GetProducts;
module.exports.GetProductId = GetProductId;