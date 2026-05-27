import { createContext, useEffect, useState } from "react";
import api from "../routes/api";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState(null);
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    api
      .get("/product/list")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err.response.data);
      });

    api
      .get("/blog/list")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  const fetchCart = async () => {
    try {
      const res = await api.get("/cart");
      setCart(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = async (product_id, quantity = 1) => {
    const data = {
      product_id: product_id,
      quantity: quantity,
    };
    try {
      const res = await api.post("/cart/add", data);

      await fetchCart();

      setOpenCart(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      fetchCart();
    }
  }, []);

  const fetchWishlist = async () => {
    const res = await api.get("/wishlist");

    setWishlist(res.data);
  };
  useEffect(() => {
    fetchWishlist();
  }, []);

  return (
    <AppContext.Provider
      value={{
        products,
        cart,
        blogs,
        wishlist,
        setCart,
        fetchCart,
        openCart,
        setOpenCart,
        addToCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
