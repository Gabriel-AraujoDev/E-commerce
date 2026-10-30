const express = require("express");
const authController = require("../controllers/auth-controller");

const router = express.Router();

router.post("/register", authController.register);
router.get("/check-email", authController.checkEmail);
router.get("/check-name", authController.checkName);

module.exports = router;