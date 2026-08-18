const express = require("express");
const produtoController = require("../controllers/product-controller.js");

const router = express.Router();

router.get("/produtos", productController.listarProdutos);