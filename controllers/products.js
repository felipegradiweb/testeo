const { default: axios } = require("axios");
function getallproducts(req, res, next) {
  let newLocal = `https://andresfelipe-gradi-store.myshopify.com/admin/api/2022-10/products/count.json`;
    const accessTokenRequestUrl = newLocal;
 
      return axios
        .get(`${accessTokenRequestUrl}`,{headers:{'X-Shopify-Access-Token':'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'}})
        .then((response) => response)
  
        .then((iddetail) => res.send(iddetail.data))
        .catch((res) => next({ status: 404, message: res.response }));
  }
  function getallorders(req, res, next) {
    const newLocal1 = `https://andresfelipe-gradi-store.myshopify.com/admin/api/2022-10/orders/count.json?status=any`;
   
    const accessTokenRequestUrl = newLocal1;
      return axios
        .get(`${accessTokenRequestUrl}`,{headers:{'X-Shopify-Access-Token':'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'}})
        .then((response) => response)
  
        .then((iddetail) => res.send(iddetail.data))
        .catch((res) => next({ status: 404, message: res.response }));
  }
  function getallcustomers(req, res, next) {
    const newLocal2 = `https://andresfelipe-gradi-store.myshopify.com/admin/api/2022-10/customers/count.json`;
   
    const accessTokenRequestUrl = newLocal2;
      return axios
        .get(`${accessTokenRequestUrl}`,{headers:{'X-Shopify-Access-Token':'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'}})
        .then((response) => response)
  
        .then((iddetail) => res.send(iddetail.data))
        .catch((res) => next({ status: 404, message: res.response }));
  }
  function webhook(req, res, next) {
    // var state=req.body.customer.state;
    // var id_cliente=req.body.customer.id;
console.log('antes',req.body )

     if(req.body.customer.state == 'disabled'){
    
      const newLocal3 = `https://andresfelipe-gradi-store.myshopify.com/admin/api/2023-01/customers/${req.body.customer.id}/send_invite.json`;
   
      const accessTokenRequestUrl = newLocal3;
        return axios
          .post(`${accessTokenRequestUrl}`,{customer_invite:{custom_message: "My awesome new store"}},{headers:{'X-Shopify-Access-Token':'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'}})
          .then((response) => {
            response}).then((iddetail)=>console.log(iddetail.data)
            )
          .catch((res) => next({ status: 404, message: res.response }));
    }

   }
  module.exports = {
    getallproducts,getallorders,getallcustomers,webhook
  };