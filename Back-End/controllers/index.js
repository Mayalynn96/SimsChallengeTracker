const express = require('express');
const router = express.Router();

const UserRoutes = require("./userController")
router.use("/api/Users",UserRoutes);

module.exports = router;