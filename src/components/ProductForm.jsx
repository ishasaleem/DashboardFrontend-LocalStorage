import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addProduct, updateProduct, getProducts } from '../utils/localStorage';

const ProductForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState({
    name: '',
    price: '',
  });

  const [errors, setErrors] = useState({});

  // Load existing product if editing
  useEffect(() => {
    if (id) {
      const existingProduct = getProducts().find(p => p.id === id);
      if (existingProduct) {
        setProduct(existingProduct);
      }
    }
  }, [id]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!product.name.trim()) {
      newErrors.name = "Product name is required";
    }

    if (!product.price) {
      newErrors.price = "Price is required";
    } else if (product.price <= 0) {
      newErrors.price = "Price must be greater than 0";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    if (id) {
      updateProduct(id, product);
    } else {
      addProduct({
        ...product,
        id: Date.now().toString(),
      });
    }

    navigate('/products');
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow p-6 rounded">
      <h2 className="text-2xl font-bold mb-4">
        {id ? "Edit Product" : "Add Product"}
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Product Name */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Product Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Product Price */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Price</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          {id ? "Update Product" : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;