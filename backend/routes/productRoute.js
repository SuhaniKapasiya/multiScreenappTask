
const { Router } = require("express");

const {createProduct,getProduct}   = require("../controllers/productController")

const router = Router();



router.post("/createProduct", createProduct);
router.get("/getProduct",getProduct);


module.exports = router;