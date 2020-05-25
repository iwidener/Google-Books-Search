const router = require("express").Router();
const googlebooksController = require("../../controllers/googlebooksController");

router.route("/")
.get(googlebooksController.findAll)
// .post(googlebooksController.create);

router
.route("/:id")
.get(googlebooksController.findById)
.put(googlebooksController.update)
.delete(googlebooksController.remove)

module.exports = router;
