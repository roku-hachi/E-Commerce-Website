const brandModel = require("../models/brandModel");

const createBrand = async (req, res) => {
  const data = req.body;
  const brand = await brandModel.createBrand(data);
  res.json(brand);
};

const getBrand = async (req, res) => {
  const brand = await brandModel.getBrand();
  res.json(brand);
};

const getBrandById = async (req, res) => {
  const id = parseInt(req.params.id);
  const brand = await brandModel.getBrandById(id);
  res.json(brand);
};

const updateBrand = async (req, res) => {
  const data = req.body;
  const id = parseInt(req.params.id);
  const brand = await brandModel.updateBrand(id, data);
  res.json(brand);
};

const deleteBrand = async (req, res) => {
  const id = parseInt(req.params.id);
  const brand = await brandModel.deleteBrand(id);
  res.json({
    massage: "Brand is deleted",
  });
};

module.exports = {
  createBrand,
  getBrand,
  getBrandById,
  updateBrand,
  deleteBrand,
};
