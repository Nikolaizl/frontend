export async function getCategories() {
  const url = "https://zappos1.p.rapidapi.com/categories/list";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "8e7f7467bfmshf8dfacae95683a8p17ed60jsn8454e328bf96",
      "x-rapidapi-host": "zappos1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function getCategoryProducts(category, genders) {
  const url =
    "https://zappos1.p.rapidapi.com/products/list?page=1&sort=relevance%2Fdesc&limit=100";

  const filters = [
    { facetField: "zc1", values: [category] },
    { facetField: "txAttrFacet_Gender", values: genders },
  ];

  const options = {
    method: "POST",
    headers: {
      "x-rapidapi-key": "8e7f7467bfmshf8dfacae95683a8p17ed60jsn8454e328bf96",
      "x-rapidapi-host": "zappos1.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(filters),
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    return result.results || [];
  } catch (error) {
    console.error("API error: ", error);
    return [];
  }
}
