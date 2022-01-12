const path = require("path");

const rootDir = require("../Util/path");

const express = require("express");

const router = express.Router();

router.use(express.static(path.join(rootDir, "public")));

router.get("/add-product", (req, res, next) => {
  console.log("GET request to admin/add-product");
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log("POST request to admin/add-product");
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
