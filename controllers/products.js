const { default: axios } = require("axios");
function getallproducts(req, res, next) {
    const newLocal = `https://andresfelipe-gradi-store.myshopify.com/admin/api/2022-10/products/count.json`;
    const accessTokenRequestUrl = newLocal;
 
      return axios
        .get(`${accessTokenRequestUrl}`,{headers:{'X-Shopify-Access-Token':'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'}})
        .then((response) => response)
  
        .then((iddetail) => res.send(iddetail.data))
        .catch((res) => next({ status: 404, message: res.response }));
  }
  module.exports = {
    getallproducts
  };