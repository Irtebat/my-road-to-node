const path = require("path");

const rootDir = require("../Util/path");

const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("GET request to /");
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
