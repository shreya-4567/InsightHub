const express = require("express");
const router = express.Router();

let creativeLinks = [];

router.post("/", (req, res) => {
  const { link } = req.body;
  if (!link) return res.status(400).json({ msg: "No link provided" });

  creativeLinks.push(link);
  res.json({ message: "Creative proof submitted!", total: creativeLinks.length });
});

module.exports = router;
