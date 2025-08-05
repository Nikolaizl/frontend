export async function getCategories() {
  const url = "https://asos10.p.rapidapi.com/api/v1/getCategories";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "8e7f7467bfmshf8dfacae95683a8p17ed60jsn8454e328bf96",
      "x-rapidapi-host": "asos10.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
