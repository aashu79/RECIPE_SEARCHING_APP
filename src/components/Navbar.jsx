import styled from "@emotion/styled";
import { MenuOpen, Search } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  OutlinedInput,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// ____________________________Styled Components___________________________

const CustomToolbox = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
});

const Navbar = ({ onInputChange, onValueSet, query }) => {
  // _____________________________States For Different Work______________________

  const [Menu, SetMenu] = useState(false);



  // _________________________________Function for Search ________________________________

  return (
    <Box>
      {/* _____________________FOR LARGE DEVICE_______________________________________ */}
      <AppBar>
        <CustomToolbox>
          <Stack
            direction="row"
            spacing={3}
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              alignItems: "center",
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="h5"
                fontWeight={600}
                sx={{
                  color: "black",
                }}
              >
                Forecipe
              </Typography>
            </Link>

            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="span"
                fontWeight={300}
                sx={{ color: "black" }}
              >
                Home
              </Typography>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>

            <Typography variant="span" fontWeight={300} sx={{ color: "black" }}>
              Contact Us
            </Typography>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>

            <Typography variant="span" fontWeight={300} sx={{ color: "black" }}>
              About Us
            </Typography>
            </Link>
            <Link to="/blog" style={{ textDecoration: "none" }}>

            <Typography variant="span" fontWeight={300} sx={{ color: "black" }}>
              Blogs
            </Typography>
            </Link>
          </Stack>

          {/* ____________________FOR SMALL DEVICE LIKE MOBILE____________________________ */}
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h5"
              fontWeight={600}
              sx={{
                color: "black",
                display: {
                  xs: "block",
                  md: "none",
                },
              }}
            >
              Forecipe
            </Typography>
          </Link>

          <MenuOpen
            onClick={() => {
              if (Menu) {
                SetMenu(false);
              } else {
                SetMenu(true);
              }
            }}
            sx={{
              display: {
                xs: "block",
                md: "none",
              },
              height: "90%",
            }}
          />

          <Drawer
            anchor="right"
            open={Menu}
            onClose={() => {
              return SetMenu(false);
            }}
            sx={{
              width: "100%",
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }} >
              <Typography
                variant="span"
                fontWeight={300}
                sx={{ color: "black" }}
              >
                Home
              </Typography>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Typography
                variant="span"
                fontWeight={300}
                sx={{ color: "black" }}
              >
                Contact Us
              </Typography>
            </Link>
           <Link to="/about" style={{ textDecoration: "none" }}>
              <Typography
                variant="span"
                fontWeight={300}
                sx={{ color: "black" }}
              >
                About Us
              </Typography>
            </Link>
            <Link to="/blog" style={{ textDecoration: "none" }}>
              <Typography
                variant="span"
                fontWeight={300}
                sx={{ color: "black" }}
              >
                Blogs
              </Typography>
            </Link>

            <Button
              variant="outlined"
              sx={{
                borderwidth: 1,
                borderColor: "black",
                color: "#EB6440",
                padding: 1,
                height: 30,
                width: "85%",
                marginLeft: 1,
              }}
            >
              Subscribe
            </Button>
          </Drawer>

          {/* ___________________________RIGHT-SIDE FOR LARGE DEVICE____________________________ */}

          <Stack
            direction="row"
            spacing={4}
            sx={{
              width: "50%",
              display: {
                xs: "none",
                md: "flex",
              },
              alignItems: "center",
            }}
          >
            
            <OutlinedInput
              placeholder="Search for recipe"
              id="inputSearch"
              sx={{
                width: "80%",
                borderRadius: 5,
                display: {
                  xs: "none",
                  sm: "flex",
                },
              }}
              onChange={onInputChange}
              value={query}
            
            />
            
            <Link to="/search">
     
              <Button
                onClick={()=>{
                  onValueSet();
                  document.getElementById("inputSearch").value ="";
                }}
                variant="outlined"
                sx={{
                  borderwidth: 1,
                  borderColor: "black",
                  color: "black",
                  padding: 2,
                  height: 50,
                  borderRadius: 4,
                  fontSize: 15,
                  padding: 1,
                  backgroundColor: "white",
                }}
              >
                Search
                <Search
                  sx={{
                    fontSize: 22,
                    textAlign: "center",
                    color: "black",
                  }}
                />
              </Button>
            </Link>
          </Stack>
        </CustomToolbox>
      </AppBar>

   
    </Box>
  );
};

export default Navbar;
