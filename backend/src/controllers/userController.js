const { isValidEmail, emailExists } = require("../common/utils/email");
const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const path = require("path");

const createUser = async (req, res) => {
  const data = req.body;
  if (!isValidEmail(data.email)) {
    return res.status(400).json({
      fields: "email",
      message: "This email is invalid.",
    });
  }
  const emailExisting = await emailExists(data.email);
  if (emailExisting) {
    return res.status(400).json({
      fields: "email",
      message: "This email already exists.",
    });
  }
  if (req.file) {
    data.avatar = req.file.path;
  }
  data.password = await bcrypt.hash(data.password, 10);
  const user = await userModel.createUser(data);
  res.json(user);
};

const getUser = async (req, res) => {
  const user = await userModel.getUser();
  res.json(user);
};

const getUserById = async (req, res) => {
  const id = req.params.user_id;
  const user = await userModel.getUserById(id);
  res.json(user);
};

const getUserByEmail = async (req, res) => {
  const data = req.body;
  const user = await userModel.getUserByEmail(data.email);
};

const updateUser = async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  const user = await userModel.updateUser(id, data);
  res.json(user);
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  const user = await userModel.deleteUser(id);
  res.json(user);
};

module.exports = {
  createUser,
  getUser,
  getUserById,
  getUserByEmail,
  updateUser,
  deleteUser,
};
