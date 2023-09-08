const express = require('express');
const router = express.Router();

const UserRoutes = require("./userController")
router.use("/api/Users",UserRoutes);

const PackRoutes = require("./packController")
router.use("/api/Packs",PackRoutes);

const CareerRoutes = require("./careerController")
router.use("/api/Careers",CareerRoutes);

const AspirationRoutes = require("./AspirationController")
router.use("/api/Aspirations",AspirationRoutes);

const TraitRoutes = require("./TraitController")
router.use("/api/Traits",TraitRoutes);

const LegacyRoutes = require("./LegacyController")
router.use("/api/Legacies",LegacyRoutes);

const SimRoutes = require("./SimController")
router.use("/api/Sims",SimRoutes);

const SkillRoutes = require("./SkillController")
router.use("/api/Skills",SkillRoutes);

module.exports = router;