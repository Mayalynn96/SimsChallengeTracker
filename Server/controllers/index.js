const express = require('express');
const router = express.Router();

const UserRoutes = require("./userController")
router.use("/api/Users",UserRoutes);

const PackRoutes = require("./packController")
router.use("/api/Packs",PackRoutes);

const CareerRoutes = require("./careerController")
router.use("/api/Careers",CareerRoutes);

module.exports = router;