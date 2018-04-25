const router = require("express").Router();
const utilsController = require("../../controllers/utilsController");

// Matches with "/api/utils/session"
router.route("/session")
    .get(utilsController.session);

// Matches with "/api/utils/login"
router.route("/login")
    .post(utilsController.logIn);

module.exports = router;