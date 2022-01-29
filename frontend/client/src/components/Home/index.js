import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Users from "../Users/Users.js";
import Banner from "../Banners/Home";
import Products from "../Products/Products";
import { getProducts } from "../../redux/actions/products";
import { unsetErr } from "../../redux/actions/errors.js";
import { SET_ACTIVE_CATEGORY } from "../../redux/constants/index.js";

const Home = () => {
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);
  const [bidProducts, setBidProducts] = React.useState({});

  React.useEffect(() => {
    dispatch(getProducts());
    return () => {
      dispatch(unsetErr());
      window.scroll(0, 0);
    };
  }, []);
  React.useEffect(() => {
    setBidProducts(app);
    console.log("hello products app changed");
  }, [dispatch, app]);

  const updateProducts = (query, type) => {
    dispatch(getProducts(query, type));
  };
  const updateActiveCategory = (category) => {
    dispatch({
      type: SET_ACTIVE_CATEGORY,
      payload: category,
    });
  };

  return (
    <>
      <Banner />

      <Products
        updateProducts={updateProducts}
        updateActiveCategory={updateActiveCategory}
        bidProducts={bidProducts}
      />
    </>
  );
};

export default Home;
