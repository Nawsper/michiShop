import allProducts from "../services/products.json";

export const callProducts = () => {
  return new Promise((resolve) => {
    resolve(allProducts);
  }, 500);
};

export const callProductsById = (idProduct) => {
  return new Promise((resolve) => {
    resolve(allProducts.find((prod) => prod.id === idProduct));
  });
};

export const callProductsByCategory = (categoryProduct) => {
  return new Promise((resolve) => {
    resolve(allProducts.filter((prod) => prod.category === categoryProduct));
  });
};
