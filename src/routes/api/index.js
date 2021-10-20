const router = require("express").Router();
const testProductsRouter = require("./testProducts");
const productsRouter = require("./products");

router.use("/productos-test", testProductsRouter);
router.use("/productos", productsRouter);

module.exports = router;
