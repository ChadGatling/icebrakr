const router = require("express").Router();
const userRoutes = require("./users");
const utilRoutes = require("./utils");

// Routes
router.use("/users", userRoutes);
router.use("/utils", utilRoutes);

module.exports = router