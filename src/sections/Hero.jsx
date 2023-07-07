import { Box, Button, OutlinedInput, Stack, Typography } from "@mui/material";
import React from "react";
import bgImage from "../imgs/food_hero.jpg";
import { Link } from "react-router-dom";

const Hero = ({ onValueSet, onInputChange, value }) => {
  return (
    <Box
      height="100vh"
      sx={{
        color: "black",
        marginTop: 8,
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        opacity: "80%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        direction="column"
        spacing={3}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "70vw",
          }}
        >
          <OutlinedInput
            placeholder="Search for recipe"
            sx={{
              width: "100%",
              borderRadius: 5,
              marginTop: 5,
              backgroundColor: "white",
              color: "black",
              filter: "opacity(0.4)",
              marginTop: "auto",
              display: {
                sx: "auto",
                sm: "auto",
                md: "none",
              },
              color: "black",
            }}
            onChange={onInputChange}
          />
          <Link to="./search">
            <Button
              onClick={onValueSet}
              variant="outlined"
              sx={{
                borderwidth: 1,
                background: "black",
                borderColor: "black",
                color: "white",
                padding: 2,
                height: 50,
                display: {
                  sx: "auto",
                  sm: "auto",
                  md: "none",
                },
              }}
            >
              Search
            </Button>
          </Link>
        </Box>
        <Typography
          variant="h5"
          sx={{
            color: "white",
            marginTop: "20px",
          }}
        >
          Appetizers
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: "white",
            marginTop: 10,
            fontWeight: 50,
          }}
        >
          Explore the culinary bliss with our vast recipe treasury.
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "white",
          }}
        >
          Start browsing our recipes now!
        </Typography>
        <Button
          variant="outlined"
          sx={{
            background: "#EB6440",
            color: "white",
            padding: 1.5,
          }}
        >
          Subscribe
        </Button>
      </Stack>
    </Box>
  );
};

export default Hero;
