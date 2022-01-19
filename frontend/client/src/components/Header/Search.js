import React from "react";
import { FormControl, InputAdornment, Stack } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

import Styles from "./Styles";

const Search = ({ lgScreen }) => {
  return (
    <Stack
      alignItems="center"
      direction="row"
      sx={(theme) => ({
        [theme.breakpoints.up("md")]: { marginInline: "auto" },
      })}
    >
      <FormControl>
        {lgScreen ? (
          <Styles.SearchInput
            color="secondary"
            placeholder="Search inventory by model, name and more..."
            disableUnderline={true}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        ) : (
          <Styles.SearchInput
            color="secondary"
            placeholder="Search inventory by model, name and more..."
            disableUnderline={true}
            sx={{ pl: 1 }}
          />
        )}
      </FormControl>
      <Styles.Btn search color="secondary" variant="contained">
        {lgScreen ? "Search Inventory" : <SearchIcon />}
      </Styles.Btn>
    </Stack>
  );
};

export default Search;
