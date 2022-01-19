import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import { useLocation } from "react-router";
import { motion } from "framer-motion";
import { batch, useDispatch, useSelector } from "react-redux";

import Navbar from "../../../Header";
import useStyles from "./styles.js";
import { getProducts } from "../../../../actions/products";
import LightBox from "./LightBox";
import DarkBox from "./DarkBox";
import BiddersBox from "./BiddersBox";
import ShowFeedback from "../../../utils/ShowFeedback";
import { unsetErr, unsetStatus } from "../../../../actions/errors";
import Footer from "../../../Footer";

const Detail = () => {
  const { products, err, status } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const [alertOpen, setAlertOpen] = useState(Boolean(status?.info));
  const [errAlertOpen, setErrAlertOpen] = useState(Boolean(err.length > 0));
  const locationRouter = useLocation();
  let initialProduct = locationRouter.state.product;
  const [product, setProduct] = useState(initialProduct);
  const classes = useStyles();
  function rehydrateProducts() {
    dispatch(getProducts(undefined, updateProduct));
    // updateProduct();
  }

  function updateProduct(prods) {
    let currProductArr = prods.filter((product) => {
      return Boolean(
        product?.product?._id === locationRouter.state.product?.product?._id
      );
    });
    if (currProductArr.length > 0) {
      setProduct(currProductArr[0]);
    }
  }

  useEffect(() => {
    rehydrateProducts();
    return () => {
      dispatch(unsetErr());
      dispatch(unsetStatus());
    };
  }, []);
  useEffect(() => {
    setAlertOpen(Boolean(status?.info));
  }, [status]);
  useEffect(() => {
    setErrAlertOpen(Boolean(err.length > 0));
  }, [err]);

  // useEffect(() => {
  //   console.log("use effect called updateProduct!!");
  //   updateProduct();
  // }, [products]);


  return (
    <>
      <Container maxwidth="lg">
        <ShowFeedback
          alertOpen={alertOpen}
          setAlertOpen={setAlertOpen}
          severity={status?.info?.severity}
          msg={status?.info?.message}
        />
        {err.length > 0 &&
          err.map((error) => (
            <ShowFeedback
              alertOpen={errAlertOpen}
              setAlertOpen={setErrAlertOpen}
              severity={"error"}
              msg={error.msg}
              title="Ooops!"
            />
          ))}

        {/* <motion.div
          style={nav}
          variants={navVariants}
          initial="hidden"
          animate="visible"
          exit="leave"
        > */}
          <Navbar />
        {/* </motion.div> */}

        <Container maxwidth="lg" className={classes.wrapperContainer}>
          <Grid container>
            <Grid
              item
              xs={12}
              md={3}
              className={classes.flex}
            >
              <LightBox product={product} />
            </Grid>
            
            <Grid
              item
              xs={12}
              md={5}
              className={classes.flex}
            >
              <BiddersBox product={product} />
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              className={classes.flex}
            >
              <DarkBox updateProducts={rehydrateProducts} product={product} />
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </Container>
    </>
  );
};

export default Detail;
