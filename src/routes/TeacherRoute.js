const express = require("express");
const TeacherController = require("../app/controllers/TeacherController");
const router = express.Router();

router.get("/", TeacherController.index);
router.get("/full", TeacherController.getFullData);
router.post("/create", TeacherController.create);
router.patch("/update", TeacherController.updateData);

module.exports = router;
