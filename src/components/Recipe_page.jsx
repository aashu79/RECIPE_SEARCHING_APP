import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import Footter from "../sections/Footter";

const Recipe_page = ({ sData }) => {
  const data = sData;
  console.log(data);
  const ing = data.recipe.ingredients;
  return (
    <Box
      container
      sx={{
        marginTop: "100px",
        width: "100%",

        display: "flex",
        flexDirection: "column",

        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "#862B0D",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {data.recipe.label}
      </Typography>
      <Box
        container
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
          },
          alignItems: "center",
          justifyContent: "space-between",

          // border: "1px solid black",
        }}
      >
        <Paper
          sx={{
            margin: "20px",
            width: {
              xs: "80vw",
              sm: "70vw",
              md: "45vw",
            },
            height: { xs: "40vh", md: "70vh" },

            borderRadius: "20px",
            
          }}
        >
          <img
            src={data.recipe.image}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />
        </Paper>

        <Box
          sx={{
            backgroundColor: "lightgoldenrodyellow",
            padding: 5,
            borderRadius: 10,
            height: {
              xs: "30vh",
              sm: "30vh",
              md: "30vh",
            },
            margin: "20px",
            
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "200",
              color: "lightblack",
              fontsize: "50px",
            }}
          >
            Meal Type: {data.recipe.mealType}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "200",
              color: "lightblack",
              fontsize: "50px",
            }}
          >
            Cuisine Type: {data.recipe.cuisineType}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "200",
              color: "lightblack",
              fontsize: "50px",
            }}
          >
            Calories: {data.recipe.calories} Mg
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "lightgoldenrodyellow",
          padding: 10,
          borderRadius: 10,

          width: "95vw",
        }}
      >
        <Typography variant="h5">Ingredients:</Typography>
        <ul
          style={{
            marginLeft: 25,
            marginTop: 15,
            fontSize: 20,
          }}
        >
          {ing.map((e, index) => {
            return <li key={index}>{e.text}</li>;
          })}
        </ul>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 200,
            marginTop: 8,
          }}
        >
          Check complete Recipe here:
        </Typography>
        <a href={`${data.recipe.url}`} target="blank">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "orange",
            }}
          >
            Check Here
          </Button>
        </a>
      </Box>

      <Footter />
    </Box>
  );
};

export default Recipe_page;
