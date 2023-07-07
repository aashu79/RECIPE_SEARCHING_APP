import { Box, Typography } from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <Box
      sx={{
        display: "flex",
        marginTop: 10,
        flexDirection: "column",
        marginLeft: 10,
      }}
    >
      <Typography variant="h4">Contact Us:</Typography>
      <Typography variant="span">Phone: 981754613456</Typography>

      <Typography variant="span">Emai: forecipe@gmail.com</Typography>
    </Box>
  );
};

export default Contact;
