import React, { useState, useEffect } from "react";
import {
  CardContent,
  Typography,
  Button,
} from "@mui/material";

import useStyles from "./style";
import Styled from "./Styled";
import defaultImg from "../../../../../images/products/defaultImg.jpeg";
import MoneyFormat from "../../../../utils/MoneyFormat";
import CountDown from "./countDown";

const LightBox = ({ product }) => {
  // console.group("Product in LightBox");
  // console.log(product);
  // console.log(product?.startTime);
  // console.log(product?.endTime);
  // console.groupEnd();
  const [cardBlinking] = useState(Boolean(product?.slots));
  const classes = useStyles();

  return (
    <Styled.CardRoot raised>
      <Styled.CardImage
        component={"img"}
        src={product?.product?.image ? product?.product?.image : defaultImg}
        title={product?.product?.name}
      />

      <CardContent>
        <CountDown product={product} />
        <Typography variant="body2" component="p" sx={{ mt: 2 }}>
          Retail Price @ {MoneyFormat(product?.product?.cost)}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          sx={{ fontWeight: "fontWeightMedium" }}
        >
          Slots Remaining: {product?.totalslots ?? 0}
        </Typography>
        <Styled.BtnContainer>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Purchase @ RRP
          </Button>
        </Styled.BtnContainer>
      </CardContent>
    </Styled.CardRoot>
  );
};

export default React.memo(LightBox);
