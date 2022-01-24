import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector, useDispatch } from "react-redux";
import { Stack, CircularProgress } from "@mui/material";

import Users from "../Users/Users.js";
import Navbar from "../Header";
import Banner from "../Banners/Home";
import useStyles from "./styles";
import Products from "../Products/Products";
import { getProducts } from "../../redux/actions/products";
import { useLocation } from "react-router-dom";
import { unsetErr } from "../../redux/actions/errors.js";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, products, categories, err, nextPageToken, pageInfo } =
    useSelector((state) => state.app);
  const [loadMore, setLoadMore] = React.useState(true);
  const fetchMoreProducts = () => {
    dispatch(getProducts({ nextPageToken }, "secondary"));
  };
  const refreshProducts = () => {
    dispatch(getProducts());
  };

  React.useEffect(() => {
    dispatch(getProducts());
    return () => {
      dispatch(unsetErr());
      window.scroll(0, 0);
    };
  }, []);
  React.useEffect(() => {
    if (products?.length && pageInfo?.totalResults) {
      if (products?.length >= pageInfo.totalResults) {
        alert("set loadmore to false");
        setLoadMore((_) => false);
      }
    }
  }, [products]);

  return (
    <>
      <Banner />
      <InfiniteScroll
        dataLength={products?.length}
        next={fetchMoreProducts}
        hasMore={loadMore}
        loader={
          <Stack>
            <CircularProgress
              disableShrink
              sx={{ color: "yellow", m: "auto" }}
            />
          </Stack>
        }
        endMessage={
          <p style={{ textAlign: "center", color: "rgba(255,255,255,0.6)" }}>
            <strong>More coming soon... 🔥</strong>
          </p>
        }
        // below props only if you need pull down functionality
        refreshFunction={refreshProducts}
        pullDownToRefresh
        pullDownToRefreshThreshold={50}
        releaseToRefreshContent={
          <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
        }
      >
        <Products
          loading={loading}
          product={products}
          categories={categories}
          err={err}
          nextPageToken={nextPageToken}
          pageInfo={pageInfo}
        />
      </InfiniteScroll>
    </>
  );
};

export default Home;
