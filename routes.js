const { Router } = require("express");

const productsRoute = require("./allproducts");
const { getallorders, getallcustomers } = require("./controllers/products");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
router.use("/allproducts", productsRoute);
router.use("/allorders", getallorders);
router.use("/allcustomers", getallcustomers);


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;