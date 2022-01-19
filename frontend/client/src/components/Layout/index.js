import React from "react";
import { Grow } from "@mui/material";
import { styled } from "@mui/system";

import Header from "../Header";
import Footer from "../Footer";

const Container = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  minHeight: "100vh",
  width: "100vw",
  maxWidth: "100%",
}));
const ContentContainer = styled("div")`
  width: 100%;
  padding-inline: ${({ theme }) => theme.spacing(2)};
  background-color: ${({theme}) => theme.palette.primary.main};
`;

const Layout = ({ children }) => {
  return (
    <Grow in>
      <Container>
        <Header />
        <ContentContainer>{children}</ContentContainer>
        <Footer />
      </Container>
    </Grow>
  );
};

export default Layout;
