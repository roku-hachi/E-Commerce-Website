require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(path.join(__dirname, "../public")));
app.use(require("./routes/authRoute"));
app.use(require("./routes/userRoute"));
app.use(require("./routes/blogRoute"));
app.use(require("./routes/productRoute"));
app.use(require("./routes/categoryRoute"));
app.use(require("./routes/brandRoute"));
app.use(require("./routes/cartRoute"));
app.use(require("./routes/orderRoute"));
app.use(require("./routes/wishlistRoute"));

app.get("/", (req, res) => {
  res.json({
    message: "Backend running",
  });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
