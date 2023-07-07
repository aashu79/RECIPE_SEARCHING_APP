import { Box, Typography } from "@mui/material";
import React from "react";

const Footter = () => {
  return (
    <Box
    id="/contact"
      sx={{
        width: "100vw",
        backgroundColor: "#FFD6A5",
        padding: "8px",
        display: "flex",
        marginTop: "30px",
        display: "flex",
        justifyContent: "space-between",

      }}
    >
      <Typography
        variant="h5"
        sx={{
          padding: "8px",
        }}
      >
        Forecipe
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginRight: 10
        }}
      >
        <Typography variant="h5">Contact Us:</Typography>
        <Typography variant="span">Phone: 981754613456</Typography>
        <Typography variant="span">
          <Typography variant="span">Emai: forecipe@gmail.com</Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footter;
