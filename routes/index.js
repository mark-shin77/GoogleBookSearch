// Dependencies
const router = require("express").Router();
const apiRoutes = require("./api");

// Defining API Routes
router.use("/api", apiRoutes);

module.exports = router;