const wishlistModel = require("../models/wishlistModel");

const createWishlist = async (req, res) => {
  const data = req.body;
  const user_id = parseInt(req.user.id);
  const product_id = parseInt(data.product_id);

  const wishlist = await wishlistModel.createWishlist(user_id, product_id);
  res.json(wishlist);
};

const getWishlist = async (req, res) => {
  const user_id = parseInt(req.user.id);

  const wishlist = await wishlistModel.getWishlist(user_id);
  res.json(wishlist);
};

const deleteWishlist = async (req, res) => {
  const id = parseInt(req.params.id);
  const wishlist = await wishlistModel.deleteWishlist(id);
  res.json(wishlist);
};

module.exports = {
  createWishlist,
  getWishlist,
  deleteWishlist,
};
