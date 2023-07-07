const dataForSections = async (defaultQuery,random) => {
  const app_id = process.env.REACT_APP_APP_ID;
  const app_key = process.env.REACT_APP_APP_KEY;
  try {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}&random=${random}`
    );
    const data = await response.json();
     return data;
  } catch (error) {
    console.error("Error", error);
  }
};

export default dataForSections;
