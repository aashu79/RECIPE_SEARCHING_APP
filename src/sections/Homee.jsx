import { ThemeProvider } from "@emotion/react";
import { Box, createTheme } from "@mui/material";
import React from "react";

import Hero from "./Hero";
import Featured from "./Featured";
import Recipe_Collection from "./Recipe_Collection";
import Footter from "./Footter";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#f44336",
    },
  },
  typography: {
    fontFamily: "Playfair Display",
  },
});

const Homee = ({ onValueSet, onInputChange, value, pizza, tea, cheese, featured, selected, query }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Hero
          onValueSet={onValueSet}
          onInputChange={onInputChange}

          value={value}
          query={query}
        />
        <Featured d={featured} selected={selected}/>

        <Recipe_Collection d={pizza} selected={selected} name={"Pizza"}/>
        <Recipe_Collection d={tea} selected={selected} name={"tea"}/>
        <Recipe_Collection d={cheese} selected={selected} name={"cheese"}/>

        <Footter />
      </Box>
    </ThemeProvider>
  );
};

export default Homee;
