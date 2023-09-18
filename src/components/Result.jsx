import React from "react";
import Carddd from "./Carddd";

import { Box, Grid, Typography, dividerClasses } from "@mui/material";
import Footter from "../sections/Footter";
import { Link } from "react-router-dom";

const Result = ({ data, query, selected }) => {
  const d = data;

  return (
    <>
    {
      d.length != 0 ? (<Box>
        <Box sx={{ flexGrow: 1, marginTop: 16, marginLeft: 7 }}>
  
         
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
            {d?.map((item, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
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
                    dd={d}
                  />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Footter />
      </Box>) : (<div style={{marginTop: "100px", marginLeft: "20px", height: "90vh"}}><h1> No results For {query}</h1></div>)
    }
    <Footter/>
    </>
  );
};

export default Result;
