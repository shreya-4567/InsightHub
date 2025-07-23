const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

router.post("/", async (req, res) => {
  if (!req.files || !req.files.resume) {
    return res.status(400).send("No file uploaded");
  }

  const resume = req.files.resume;
  const uploadPath = path.join(__dirname, "..", "uploads", resume.name);

  resume.mv(uploadPath, (err) => {
    if (err) return res.status(500).send(err);

    // Mocked response
    res.json({ message: "Resume uploaded and analyzed!", skills: ["React", "Node.js", "AI"] });
  });
});

module.exports = router;
