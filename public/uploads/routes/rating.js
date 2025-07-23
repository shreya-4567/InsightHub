const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { github, linkedin } = req.body;
  if (!github || !linkedin) return res.status(400).json({ msg: "Missing fields" });

  // Mocked rating
  const rating = Math.floor(Math.random() * 50) + 50; // Random 50-100
  res.json({ rating, message: `Rating for ${github} analyzed successfully.` });
});

module.exports = router;
