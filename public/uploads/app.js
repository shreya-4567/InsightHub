const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use('/uploads', express.static('uploads'));

app.use("/api/rating", require("./routes/rating"));
app.use("/api/resume", require("./routes/resume"));
app.use("/api/creative", require("./routes/creative"));

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
