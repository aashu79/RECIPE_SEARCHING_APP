import React from "react";
import Carddd from "./Carddd";

import { Box, Grid, Typography } from "@mui/material";
import Footter from "../sections/Footter";
import { Link } from "react-router-dom";

const Result = ({ data, query, selected }) => {
  const d = data;

  return (
    <Box>
      <Box sx={{ flexGrow: 1, marginTop: 15, marginLeft: 10 }}>

       
        <Typography
          variant="h5"
          sx={{
            color: "grey",
            marginBottom: 10,
          }}
        >
          Results For : {query}
        </Typography>
        <Grid
          container
          spacing={{ xs: 5, md: 10 }}
          columns={{ xs: 1, sm: 12, md: 13 }}
          sx={{}}
        >
          {d.map((item, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Link
                to="/recipe"
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
                  dd={d}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footter />
    </Box>
  );
};

export default Result;
