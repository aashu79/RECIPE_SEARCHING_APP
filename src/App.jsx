import React, { useEffect, useState } from "react";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import Homee from "./sections/Homee";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import Recipe_page from "./components/Recipe_page";
import dataForSections from "./components/DataFetcher";
import Error from "./sections/Error";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Blog from "./sections/Blog";



const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#f44336",
    },
  },
  typography: {
    fontFamily: "Playfair Display",
  },
});

const App = () => {
  // _____________________For Result Section____________________________
  const [query, setQuery] = useState();
  const [value, setValue] = useState();
  const onValueSet = () => {
    setValue(query);
   
  };
  const onInputChange =  (e) => {
    setQuery(e.target.value);
  
  };
  // ________________________________________________________________________

  // _____________________________Data Result Page________________________________

  const [data, setData] = useState();
  useEffect(() => {
    dataForSections(query, false).then((response) => {
      setData(response.hits);
      
    });
  }, [value]);



  // __________________________________________________________________________________

  // _____________________________Data For Recipe_Collection Pages________________________________
  const recipe_type = ["Pizza", "Tea", "Cheese"];
  const [pizza, setPizza] = useState([]);
  const [tea, setTea] = useState([]);
  const [cheese, setCheese] = useState([]);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    dataForSections(`${recipe_type[0]}`, true).then((response) => {
      setPizza(response.hits);
    });
  }, []);

  useEffect(() => {
    dataForSections(`${recipe_type[1]}`, true).then((response) => {
      setTea(response.hits);
    });
  }, []);

  useEffect(() => {
    dataForSections(`${recipe_type[2]}`, true).then((response) => {
      setCheese(response.hits);
    });
  }, []);

  useEffect(() => {
    dataForSections("cake", true).then((response) => {
      setFeatured(response.hits);
    });
  }, []);

  // __________________________________________________________________________________

  // ______________________________Functions_______________________________________________
  const [s_data, setSdata] = useState([]);

  const selected = (e, d) => {
    setSdata(d[e]);
  };

  // ______________________________________________________________________________________

  // ______________________________Scroll To Top _______________________________________________
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  // ______________________________________________________________________________________

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Navbar
          onInputChange={onInputChange}
          value={value}
          onValueSet={onValueSet}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Homee
                onInputChange={onInputChange}
                value={value}
                query={query}
                onValueSet={onValueSet}
                pizza={pizza}
                tea={tea}
                cheese={cheese}
                featured={featured}
                selected={selected}
              />
            }
          />
          <Route
            path="/search"
            element={value ? <Result data={data} query={value} selected={selected} /> : <Error/>}
          />
          <Route path="/recipe" element={<Recipe_page sData={s_data} />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
};

export default App;
