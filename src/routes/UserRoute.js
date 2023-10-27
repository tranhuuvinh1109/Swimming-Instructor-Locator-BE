const express = require("express");
const UserController = require("../app/controllers/UserController");
const router = express.Router();

router.get("/", UserController.index);
router.post("/create", UserController.create);

module.exports = router;
