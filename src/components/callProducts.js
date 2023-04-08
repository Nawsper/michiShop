import allProducts from "../services/products.json";

const callProducts = () => {
  return new Promise((resolve) => {
    resolve(allProducts);
  }, 500);
};

export default callProducts;
