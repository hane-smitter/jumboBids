import React, { useEffect } from "react";
import {
  Typography,
  Box,
  Stack,
  CircularProgress,
  Divider,
  ListItem,
  Avatar,
  List,
  ListItemAvatar,
  CardContent,
  Card,
  ListItemText,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import useStyles from "./styles.js";

const DarkBox = ({ bidders, loading }) => {
  const classes = useStyles();

  return (
    <Box className={classes.darkBox}>
      <Card className={classes.cardRoot}>
        <Typography
          className={classes.white}
          style={{ backgroundColor: "#000", textAlign: "center" }}
          variant="h5"
        >
          Current Bids
        </Typography>
        {!loading ? (
          <CardContent>
            <Divider color="grey" />
            <List>
              <ListItem>
                <ListItemText>Bid</ListItemText>
                <ListItemText>User</ListItemText>
                <ListItemText>Time</ListItemText>
              </ListItem>
              {bidders?.topActiveBidders?.length > 0 && (
                <span>
                  {bidders.topActiveBidders.map((activeBidder) => (
                    <ListItem
                      style={{ padding: 0, margin: 0, fontSize: "4px" }}
                    >
                      <ListItemText
                        style={{ padding: 0, margin: 0, fontSize: "4px" }}
                      >
                        {activeBidder?.bidAmountTotal ?? 0}
                      </ListItemText>
                      <ListItemAvatar>
                        <Avatar>
                          <ImageIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText>
                        {activeBidder?.user?.surname ?? "__"}
                      </ListItemText>
                      <ListItemText>
                        {new Date(activeBidder?.createdAt ?? "").toLocaleString(
                          "en-US",
                          { hour: "numeric", minute: "numeric" }
                        )}
                      </ListItemText>
                    </ListItem>
                  ))}
                </span>
              )}
            </List>
            <Divider color="grey" />
          </CardContent>
        ) : (
          <Stack sx={{ width: "100%", height: "100%" }}>
            <CircularProgress sx={{ m: "auto", color: "common.white" }} />
          </Stack>
        )}
      </Card>
    </Box>
  );
};

export default DarkBox;
