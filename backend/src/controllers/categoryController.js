const categoryModel = require("../models/categoryModel");

const createCategory = async (req, res) => {
  const data = req.body;
  const category = await categoryModel.createCategory(data);
  res.json(category);
};

const getCategory = async (req, res) => {
  const category = await categoryModel.getCategory();
  res.json(category);
};

const getCategoryById = async (req, res) => {
  const data = req.body;
  const id = parseInt(req.params.id);
  const category = await categoryModel.getCategoryById(id);
};

const updateCatagory = async (req, res) => {
  const data = req.body;
  const id = parseInt(req.params.id);
  const category = await categoryModel.updateCatagory(id, data);
  res.json(category);
};

const deleteCategory = async (req, res) => {
  const id = parseInt(req.params.id);
  const category = await categoryModel.deleteCategory(id);
  res.json(category);
};

module.exports = {
  createCategory,
  getCategory,
  getCategoryById,
  updateCatagory,
  deleteCategory,
};
