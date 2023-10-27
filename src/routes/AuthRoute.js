const express = require("express");
const AuthController = require("../app/controllers/AuthController");
const router = express.Router();

router.post("/login", AuthController.login);
router.post("/register", AuthController.register);

module.exports = router;