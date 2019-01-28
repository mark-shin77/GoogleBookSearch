// Dependencies
const router = require("express").Router();
const apiRoutes = require("./api");
const path = require("path");

// Defining API Routes
router.use("/api", apiRoutes);

// Define any API routes before this runs, Send every request to the React app
router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
});

module.exports = router;