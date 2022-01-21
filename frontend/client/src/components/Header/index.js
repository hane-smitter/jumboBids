import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Stack, useMediaQuery } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

import Search from "./Search";
import Logo from "../../images/logo.png";
import Styles from "./Styles";
import { navigations } from "./NavItems";
import MobileDrawer from "./MobileDrawer";

const Header = () => {
  const lgScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header>
      <Styles.StackCont direction="row" spacing={2}>
        <Styles.LogoLink to="/" component={RouterLink}>
          <Box component="img" src={Logo} style={{ width: "100%" }} />
        </Styles.LogoLink>

        {lgScreen && <Search lgScreen={lgScreen} />}

        {lgScreen ? (
          <Box sx={{ marginInline: "auto" }}>
            <Styles.Btn color="secondary" variant="contained">
              register
            </Styles.Btn>
            <Styles.Btn signin variant="contained" sx={{ ml: 1 }}>
              sign in
            </Styles.Btn>
          </Box>
        ) : (
          <>
            <MenuIcon
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
            />
          </>
        )}
      </Styles.StackCont>
      <Styles.StackCont
        sx={{
          backgroundImage: "unset",
          py: lgScreen ? 0 : 2,
        }}
        direction="row"
        spacing={1}
      >
        {lgScreen ? (
          <Stack direction="row" sx={{ width: "40%", height: "50px" }}>
            <Box component="nav">
              <ul>
                {navigations.map((navigation, index) => (
                  <li key={index}>
                    <Styles.RouteLink
                      component={RouterLink}
                      to={navigation.href}
                    >
                      {navigation.name}
                    </Styles.RouteLink>
                  </li>
                ))}
              </ul>
            </Box>
          </Stack>
        ) : (
          <>
            <Search lgScreen={lgScreen} />
            <Styles.Btn color="secondary" variant="contained">
              register
            </Styles.Btn>
          </>
        )}
      </Styles.StackCont>
      {!lgScreen && (
        <MobileDrawer openMenu={openMenu} setOpenMenu={setOpenMenu} />
      )}
    </header>
  );
};

export default React.memo(Header);
