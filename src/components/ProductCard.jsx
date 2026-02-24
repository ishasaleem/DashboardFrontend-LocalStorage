import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onDelete }) => {
  return (
    <div className="bg-white p-4 shadow rounded">
      <h3 className="font-bold text-lg">{product.name}</h3>
      <p className="text-gray-700 mt-1">${product.price}</p>
      <div className="flex gap-2 mt-3">
        <Link
          to={`/products/edit/${product.id}`}
          className="text-blue-500 hover:underline"
        >
          Edit
        </Link>
        <button
          onClick={() => onDelete(product.id)}
          className="text-red-500 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;