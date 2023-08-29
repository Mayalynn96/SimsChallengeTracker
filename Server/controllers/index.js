const express = require('express');
const router = express.Router();

const UserRoutes = require("./userController")
router.use("/api/Users",UserRoutes);

const ExpansionRoutes = require("./expansionController")
router.use("/api/Expansions",ExpansionRoutes);

module.exports = router;