const { Router } = require("express");

const productsRoute = require("./allproducts");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
router.use("/allproducts", productsRoute);


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;