const express = require("express");
const productController = require("../controllers/product-controller.js");

const router = express.Router();

router.get("/produtos", productController.listProducts);