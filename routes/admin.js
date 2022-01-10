const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  console.log("GET request to admin/add-product");
  res.send(
    `<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form>`
  );
});

router.post("/add-product", (req, res, next) => {
  console.log("POST request to admin/add-product");
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
