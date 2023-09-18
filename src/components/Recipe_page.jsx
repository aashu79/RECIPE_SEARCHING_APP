import { Box, Button, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footter from "../sections/Footter";
import { useParams } from "react-router-dom";
import Loader from "../components/loader/Loader"

const Recipe_page = () => {
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const [sData, setSData] = useState()

const dataFetcher = async()=>{
  const app_id = process.env.REACT_APP_APP_ID;
  const app_key = process.env.REACT_APP_APP_KEY;
  
  try {
    setLoading(true);
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${params.name}&app_id=${app_id}&app_key=${app_key}`
    );
   
    const data = await response.json();
     setSData(data?.hits[0])
    } catch(err) {
      console.log(err);
    }
    finally {
      setLoading(false);
    }
}

useEffect(()=>{
dataFetcher();
},[])


  
const ing =  sData?.recipe.ingredients;
  return (
    <>
    {
      loading ? (<div style={{height: "90vh", display: "flex", marginTop: "50px", justifyContent: "center", alignItems: "center"}}><Loader/></div>) :
   
   
   ( <Box
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
        {sData? sData.recipe.label : null}
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
            src={sData ? sData.recipe.image : null}
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
            Meal Type: {sData ? sData.recipe.mealType: null}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "200",
              color: "lightblack",
              fontsize: "50px",
            }}
          >
            Cuisine Type: {sData ? sData.recipe.cuisineType: null}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "200",
              color: "lightblack",
              fontsize: "50px",
            }}
          >
            Calories: {sData ? sData.recipe.calories : null} Mg
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
          {ing ? ing.map((e, index) => {
            return <li key={index}>{e.text}</li>;
          }) : null}
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
        <a href={`${sData ? sData.recipe.url : null}`} target="blank">
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
    </Box>)
  }
  </>
  );
};

export default Recipe_page;
