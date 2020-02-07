const express = require("express");
const path = require("path");
const app = express();
const router = express.Router();
const fetch = require("node-fetch");

app.use(express.static(path.join(__dirname, "build")));

app.get("/status", function(req, res) {
  return res.status(200).send("server running");
});

router.route("/weather").get(async function(req, res) {
  const response = await fetch(
    "https://www.metaweather.com/api/location/44418/"
  );
  const result = await response.json();
  res.json(result);
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use("/api", router);

app.listen(process.env.PORT || 8080);
