const { Router } = require("express");
const router = Router();
const {
  getallproducts, getallorders, getallcustomers,
  
} = require("./controllers/products");

router.get("/", getallproducts);
router.get("/", getallorders);
router.get("/", getallcustomers);


module.exports = router;