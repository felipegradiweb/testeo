const { Router } = require("express");
const router = Router();
const {
  getallproducts,
  
} = require("./controllers/products");

router.get("/", getallproducts);


module.exports = router;