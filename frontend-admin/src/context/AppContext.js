import { createContext, useEffect, useState } from "react";
import api from "../routes/api";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    api
      .get("/category/list")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });

    api
      .get("/brand/list")
      .then((res) => {
        setBrands(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  return (
    <AppContext.Provider value={{ categories, brands }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
