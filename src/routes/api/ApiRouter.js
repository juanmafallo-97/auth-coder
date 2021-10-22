const router = require("express").Router();
const testProductsRouter = require("./TestProductsRouter");
const productsRouter = require("./ProductsRouter");

router.use("/productos-test", testProductsRouter);
router.use("/productos", productsRouter);

module.exports = router;
