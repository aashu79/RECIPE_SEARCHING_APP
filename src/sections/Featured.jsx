import { Box, Divider, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Carddd from "../components/Carddd";
import { Link } from "react-router-dom";

const Featured = ({ d, selected }) => {
  const data = d;

  data.splice(3, 18);

  return (
    <Box
      sx={{
        marginTop: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4" fontWeight={30}>
        Top Searched Recipes
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row", md: "row" }}
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        sx={{
          marginTop: 5,
          marginLeft: 5,
          marginRight: 5,
        }}
      >
        {data.map((item, index) => {
          return (
            <Link
              to={`/recipe/${item.recipe.label}`}
              style={{
                textDecoration: "none",
              }}
            >
              <Carddd
                key={index}
                id={index}
                name={item.recipe.label}
                img={item.recipe.image}
                selected={selected}
                dd={data}
              />
            </Link>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Featured;
