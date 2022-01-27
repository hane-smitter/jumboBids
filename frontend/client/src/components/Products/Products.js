import React from "react";
import {  useDispatch } from "react-redux";
import {
  Typography,
  Grid,
  CircularProgress,
  Stack,
  useMediaQuery,
} from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import CategoryIcon from "@mui/icons-material/Category";
import { decode } from "html-entities";

import Product from "./Product/Product";
import Styled from "./Styled";
import { getProducts } from "../../redux/actions/products";
import { unsetErr } from "../../redux/actions/errors";

const Products = (props) => {
  const { products, categories, pageInfo, nextPageToken } = props;

  const dispatch = useDispatch();
  const [categoryOpen, setCategoryOpen] = React.useState(false);

  const handleCategoryClick = () => {
    setCategoryOpen(!categoryOpen);
  };
  


  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <>
      <Styled.CB>
        <Styled.CBList
          component="nav"
          aria-labelledby="categories"
          disablePadding
          sx={{ bgcolor: categoryOpen ? "#486391" : "inherit" }}
        >
          <Styled.CBListItem
            sx={{ py: 0.5 }}
            button
            onClick={handleCategoryClick}
          >
            <Styled.CBListItemIcon>
              <CategoryIcon />
            </Styled.CBListItemIcon>
            <Styled.CBListItemText
              primary="Browse Categories"
              primaryTypographyProps={{
                fontSize: 14,
                fontWeight: "medium",
                letterSpacing: 0,
              }}
              secondary={categories
                ?.slice(0, Math.ceil(categories.length * 0.3))
                .map((category) => `${decode(category.name)}, `)}
              secondaryTypographyProps={{
                noWrap: true,
                fontSize: 12,
                lineHeight: "16px",
                color: categoryOpen ? "rgba(0,0,0,0)" : "rgba(255,255,255,0.5)",
              }}
            />
            <ArrowDropUpIcon
              sx={{
                mr: -1,
                transform: categoryOpen ? "rotate(-180deg)" : "rotate(0)",
                transition: "0.2s",
              }}
            />
          </Styled.CBListItem>
        </Styled.CBList>
        <Styled.CBCollapse in={categoryOpen} timeout="auto" unmountOnExit>
          <Styled.CBList component="div">
            <Styled.CBListItem
              button
              onClick={() => {
                setCategoryOpen(false);
                dispatch(getProducts());
              }}
            >
              <Styled.CBListItemText primary={"All"} />
            </Styled.CBListItem>
            {categories.map((category) => (
              <Styled.CBListItem
                button
                key={category._id}
                onClick={() => {
                  setCategoryOpen(false);
                  dispatch(getProducts({ category: category.category_slug }));
                }}
              >
                <Styled.CBListItemText
                  primary={decode(category.name ? category.name : "")}
                />
              </Styled.CBListItem>
            ))}
          </Styled.CBList>
        </Styled.CBCollapse>
      </Styled.CB>

      
        {!products?.length ? (
          <Typography
            variant="h5"
            color="textSecondary"
            align="center"
            component="p"
            sx={{ bgcolor: "background.paper", p: 5 }}
          >
            Sorry! No Products are available!!
          </Typography>
        ) : (
          <Grid
            container
            justifyContent={isMobile ? "space-around" : "left"}
            alignItems="stretch"
            spacing={3}
            style={{ marginBlock: 20, marginBlockEnd: 40 }}
          >
            {products.map((product) => {
              let content = null;
              if (Boolean(product.product)) {
                content = (
                  <Grid
                    style={{ maxWidth: 250 }}
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    key={product._id}
                  >
                    <Product product={product} />
                  </Grid>
                );
              }
              return content;
            })}
          </Grid>
        )}
    </>
  );
};

export default React.memo(Products);
