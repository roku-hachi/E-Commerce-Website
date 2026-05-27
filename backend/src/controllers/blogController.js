const blogModel = require("../models/blogModel");

const createBlog = async (req, res) => {
  const data = req.body;
  if (req.files && req.files.length > 0) {
    data.image = req.files.map((file) => file.path);
  }
  const blog = await blogModel.createBlog(data);
  res.json(blog);
};

const getBlog = async (req, res) => {
  const blog = await blogModel.getBlog();
  res.json(blog);
};

const getBlogById = async (req, res) => {
  const data = req.body;
  const id = parseInt(req.params.id);
  const blog = await blogModel.getBlogById(id);
  res.json(blog);
};

const updateBlog = async (req, res) => {
  const data = req.body;
  const id = parseInt(req.params.id);
  if (req.files && req.files.length > 0) {
    data.image = req.files.map((file) => file.path);
  }
  const blog = await blogModel.updateBlog(id, data);
  res.json(blog);
};

const deleteBlog = async (req, res) => {
  const id = parseInt(req.params.id);
  const blog = await blogModel.deleteBlog(id);
  res.json(blog);
};

module.exports = {
  createBlog,
  getBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
};
