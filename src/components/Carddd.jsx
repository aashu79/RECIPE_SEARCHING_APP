import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";


const Carddd = ({ img, name, selected, id, dd}) => {
  return (
    <Box>
      <Link
        to="#"
        sx={{
          ":hover": {
            transform: "scale(1.02)",
          },
        }}
      >
        <Paper
          elevation={5}
          sx={{
            width: {
              xs: "80vw",
              sm: "25vw",
              md: "25vw",
            },
          }}
        >
          <Card
            onClick={() => {
              selected(id, dd);
            }}
          >
            <CardMedia component="img" image={img}/>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="span"
                fontSize={20}
                sx={{
                  color: "black",
                  marginTop: 1,
                }}
              >
                {name}
              </Typography>
            </CardContent>
          </Card>
        </Paper>
      </Link>
    </Box>
  );
};

export default Carddd;
