const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");
const { generateAccessToken, generateRefreshToken } = require("../utils/jwt");

const login = async (req, res) => {
  const data = req.body;
  const user = await userModel.getUserByEmail(data.email);
  if (!user) {
    return res.status(400).json({
      fields: "email",
      message: "Email does not exist",
    });
  }

  const isMatch = await bcrypt.compare(data.password, user.password);

  if (!isMatch) {
    return res.status(400).json({
      fields: "Password incorrect",
    });
  }
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);
  return res.json({
    message: "Login success",
    user,
    accessToken: accessToken,
    refreshToken: refreshToken,
  });
};

module.exports = { login };
