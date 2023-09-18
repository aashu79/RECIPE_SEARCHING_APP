import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";

import Carddd from "../components/Carddd";

import { Link } from "react-router-dom";

const Recipe_Collection = ({d, selected, name}) => {
 
  
  const data = d;
  data.splice(3,18);
  console.log(data);



  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h4"
        fontWeight={30}
        sx={{
          position: "static",
        }}
      >
        {name} Recipe Collection
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
                img={item.recipe.image}
                name={item.recipe.label}
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

export default Recipe_Collection;
