const productModel = require("../models/productModel");

const createProduct = async (req, res) => {
  const data = req.body;
  if (req.files && req.files.length > 0) {
    data.image = req.files.map((file) => file.path);
  }
  data.price = Number(data.price);
  data.brand_id = Number(data.brand_id);
  data.category_id = Number(data.category_id);
  data.sale_price = Number(data.sale_price);
  data.stock = Number(data.stock);

  data.featured = data.featured === "true";
  data.status = data.status === "true";
  data.user_id = parseInt(data.user_id);
  const product = await productModel.createProduct(data);
  res.json(product);
};

const getProduct = async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = 5;
  const skip = (page - 1) * limit;

  const result = await productModel.getProduct(skip, limit);
  res.json({
    products: result.products,
    total: result.total,
    currentPage: page,
    totalPages: Math.ceil(result.total / limit),
  });
};

const searchProduct = async (req, res) => {
  const keyword = req.query.keyword || "";
  const product = await productModel.searchProduct(keyword);
  res.json(product);
};

const getProductById = async (req, res) => {
  const id = parseInt(req.params.id);
  const product = await productModel.getProductById(id);
  res.json(product);
};

const updateProduct = async (req, res) => {
  const data = req.body;
  const id = parseInt(req.params.id);
  data.price = parseInt(data.price);
  if (req.files && req.files.length > 0) {
    data.image = req.files.map((file) => file.path);
  }
  const product = await productModel.updateProduct(id, data);
  res.json(product);
};

const deleteProduct = async (req, res) => {
  const id = parseInt(req.params.id);
  const product = await productModel.deleteProduct(id);
  res.json({
    massage: "The product has been deleted.",
  });
};

module.exports = {
  createProduct,
  getProduct,
  searchProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
