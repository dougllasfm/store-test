import axios from "axios";

async function getProducts() {
  try {
    const response = await axios.get("http://localhost:3060/list");
    const data = response.data;
    return data;
  } catch (e) {
    console.log(e);
  }
}

async function addProducts(newProduct) {
  try {
    const response = await axios.post(
      "http://localhost:3060/create",
      newProduct
    );
    const data = response.data;
    return data;
  } catch (e) {
    console.log(e);
  }
}

async function deleteProducts(product) {
  try {
    const response = await axios.delete("http://localhost:3060/delete", {
      params: {
        id: product,
      },
    });
    const data = response.data;
    return data;
  } catch (e) {
    console.log(e);
  }
}

async function updateProduct(product) {
  try {
    const response = await axios.put("http://localhost:3060/update", product, {
      params: {
        id: product.id,
      },
    });
    const data = response.data;
    return data;
  } catch (e) {
    console.log(e);
  }
}

export const api = {
  getProducts,
  addProducts,
  deleteProducts,
  updateProduct
};
