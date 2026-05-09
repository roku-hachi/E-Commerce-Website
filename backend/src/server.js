require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes/userRoute"));
app.use(require("./routes/authRoute"));

app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.json({
    message: "Backend running",
  });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
