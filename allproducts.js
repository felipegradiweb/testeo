const { Router } = require("express");
const router = Router();
const {
  getallproducts, getallorders, getallcustomers,webhook
  
} = require("./controllers/products");

router.get("/", getallproducts);
router.get("/", getallorders);
router.get("/", getallcustomers);
router.post("/", webhook);


module.exports = router;