const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("server haazır ve calisiyor");
});

module.exports = router;
