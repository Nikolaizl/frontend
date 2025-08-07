export async function getCategoryProducts(category, genders) {
  const url =
    "https://zappos1.p.rapidapi.com/products/list?page=1&sort=relevance%2Fdesc&limit=200";

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

export async function getProductDetails(productId) {
  const url = `https://zappos1.p.rapidapi.com/products/detail?productId=${productId}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "8e7f7467bfmshf8dfacae95683a8p17ed60jsn8454e328bf96",
      "x-rapidapi-host": "zappos1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    const product = result.product[0];

    return {
      id: product.productId,
      name: product.productName,
      brand: product.brandName,
      category: product.defaultCategory || "Unknown",
      price:
        parseFloat(
          product.price?.replace(/[^0-9.]/g, "") ||
            product.styles?.[0]?.price?.replace(/[^0-9.]/g, "")
        ) || 0,
      old_price:
        parseFloat(
          product.originalPrice?.replace(/[^0-9.]/g, "") ||
            product.styles?.[0]?.originalPrice?.replace(/[^0-9.]/g, "")
        ) || 0,
      image: `https://www.zappos.com${product.defaultImageUrl}`,
      description: product.description || "No description available.",
      sizes: product.sizing?.allValues?.map((val) => val.value) || [],
    };
  } catch (error) {
    console.error("Error fetching product details:", error);
    throw error;
  }
}
