const express = require("express");
const router = express.Router();
const { create, destroy, get, getAll, sendMail } = require("../../controllers/notification-controllers");

router.post("/email", sendMail);
router.post("/notifications", create);

module.exports = router;