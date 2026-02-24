// Get all products from Local Storage
export const getProducts = () => {
  return JSON.parse(localStorage.getItem('products')) || [];
};

// Save all products to Local Storage
export const saveProducts = (products) => {
  localStorage.setItem('products', JSON.stringify(products));
};

// Add a new product
export const addProduct = (product) => {
  const products = getProducts();
  products.push(product);
  saveProducts(products);
};

// Update an existing product by ID
export const updateProduct = (id, updatedProduct) => {
  let products = getProducts();
  products = products.map(p => p.id === id ? updatedProduct : p);
  saveProducts(products);
};

// Delete a product by ID
export const deleteProduct = (id) => {
  let products = getProducts();
  products = products.filter(p => p.id !== id);
  saveProducts(products);
};