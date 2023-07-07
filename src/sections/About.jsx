import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import logo from "../imgs/about.jpg";

const About = () => {
  return (
    <Box
      sx={{
        marginTop: 12,
        marginLeft: 10,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h5">About Us:</Typography>
      <Box
        sx={{
          display: "flex",
          padding: 2,
          flexDirection: {
            xs: "column",
            sm: "row",
            md: "row",
          },
          margin: 2,
        }}
      >
        <Typography
          variant="span"
          sx={{
            width: "50%",
            fontSize: 18,

            margin: 2,
          }}
        >
          Welcome to Forecipe, your one-stop shop for all things recipes. We're
          a team of passionate foodies who love to cook and share our recipes
          with others. We believe that everyone should have access to delicious
          and easy-to-follow recipes, no matter their skill level or budget.
          That's why we've created Forecipe, a website that makes it easy to
          find the perfect recipe for any occasion. Whether you're looking for a
          quick and easy weeknight meal or a show-stopping dish for a special
          event, we have something for you. We've got recipes for all types of
          cuisines, from classic American fare to international dishes. We also
          have recipes for every dietary need, including gluten-free,
          dairy-free, and vegan options. In addition to our vast recipe
          database, we also offer a variety of other features to help you make
          the most of your cooking experience. We have a blog with helpful tips
          and advice, a forum where you can connect with other foodies, and a
          recipe builder that lets you customize your own recipes. We're
          constantly adding new recipes and features to Forecipe, so be sure to
          check back often. And if you have any recipes you'd like to share,
          we'd love to hear from you! Thank you for choosing Forecipe. We hope
          you enjoy your stay!
        </Typography>
        <Paper
          elevation={3}
          sx={{
            width: "50%",
            height: "60vh",
          }}
        >
          <img
            src={logo}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Paper>
      </Box>
    </Box>
  );
};

export default About;
