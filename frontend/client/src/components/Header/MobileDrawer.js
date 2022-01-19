import React from "react";
import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Close as CloseIcon } from "@mui/icons-material";

import { navigations } from "./NavItems";
import Styles from "./Styles";

const MobileDrawer = ({ openMenu, setOpenMenu }) => {
  const navigate = useNavigate();

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === "keydown" && event.key === "Esc") {
      setOpenMenu(false);
      return;
    }

    setOpenMenu(Boolean(open));
  };
  return (
    <div>
      <SwipeableDrawer
        anchor={"left"}
        open={openMenu}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <List
          sx={{
            height: "100%",
            width: "100%",
            maxWidth: 400,
            bgcolor: "primary.light",
          }}
        >
          <ListItem disableGutters>
            <Box sx={{ width: "100%" }}>
              <CloseIcon
                sx={{ ml: "auto", mr: 1.5, display: "block" }}
                onClick={toggleDrawer(false)}
              />
            </Box>
          </ListItem>
          {navigations.map((navigation, index) => (
            <ListItem
              button
              key={index}
              onClick={() => {
                console.log("LISTITEM clicked!!!");
                setOpenMenu(false);
                navigate(navigation.href);
              }}
            >
              <ListItemIcon>{navigation.icon}</ListItemIcon>
              <ListItemText primary={navigation.name} />
            </ListItem>
          ))}
          <ListItem>
            <Styles.Btn fullWidth>sign in</Styles.Btn>
          </ListItem>
        </List>
      </SwipeableDrawer>
    </div>
  );
};

export default MobileDrawer;
