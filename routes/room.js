const roomController = require("../controller/roomController");

const router = require("express").Router();

router.post("/",roomController.addRoom);

module.exports = router;