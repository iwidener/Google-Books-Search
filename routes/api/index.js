const router = require("express").Router();
const googlebookRoutes = require("./googlebooks");

router.use("/googlebooks", googlebookRoutes);

module.exports = router;