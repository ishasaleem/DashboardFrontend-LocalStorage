import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { getProducts, deleteProduct } from '../utils/localStorage';
import { Link } from 'react-router-dom';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const handleDelete = (id) => {
    deleteProduct(id);
    setProducts(getProducts());
  };

  // Filtering Logic
  const filteredProducts = products.filter(product => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesMin =
      minPrice === '' || Number(product.price) >= Number(minPrice);

    const matchesMax =
      maxPrice === '' || Number(product.price) <= Number(maxPrice);

    return matchesSearch && matchesMin && matchesMax;
  });

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Products</h2>
        <Link
          to="/products/add"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Product
        </Link>
      </div>

      {/* Search & Filter Section */}
      <div className="bg-white p-4 shadow rounded mb-6 grid grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border p-2 rounded"
        />
      </div>


    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <p className="text-gray-500 col-span-3">
            No matching products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductManagement;