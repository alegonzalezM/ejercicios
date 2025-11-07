
const products = [
  {
    id: 1,
    name: "Producto 1",
    price: 1000,
  },
  {
    id: 2,
    name: "Producto 2",
    price: 2000,
  },
];
export const getAllProducts = () => {
return products;
};
export const getProductById = async (id) => {
return products.find(product => product.id == id);
};
export const createProduct = async (productData) => {
const newProduct = {
id: products.length + 1,
name: productData.name,
price: productData.price
};
products.push(newProduct);
return newProduct;
};


