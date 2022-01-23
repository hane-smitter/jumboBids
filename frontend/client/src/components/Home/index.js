import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Container,
  Grow,
  Box,
  Grid,
  Typography,
  Paper,
} from "@mui/material";

import { getProducts } from "../../redux/actions/products";
import Users from "../Users/Users.js";
import Navbar from "../Header";
import Banner from "../Banners/Home";
import useStyles from "./styles";
import Products from "../Products/Products";
import Pagination from "../Pagination";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Home = () => {
  const query = useQuery();
  const page = query.get("page") || 1;

  // useEffect(() => {
  //     dispatch(getProducts());
  // }, [dispatch]);
  // const theme = useTheme();
  
  return (
    <>
      <Banner />
      {/* <Grid container justifyContent="center" className={classes.bg}>
                    <Banner />
                </Grid> */}
      <Products />
      <Box
        style={{
          borderLeft: "solid 2px #2b5681",
          borderRight: "solid 2px #2b5681",
          marginTop: "-20px",
          marginBottom: "20px",
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="stretch"
          spacing="3"
        >
          <Grid item xs={12} sm={6} md={3}>
            <Pagination page={page} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
