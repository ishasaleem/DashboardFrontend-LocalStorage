import React from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = ({ setIsOpen }) => {
  const location = useLocation();

  const getTitle = () => {
    if (location.pathname === "/") return "Dashboard Overview";
    if (location.pathname === "/products") return "Product Management";
    if (location.pathname.includes("/products/add")) return "Add Product";
    if (location.pathname.includes("/products/edit")) return "Edit Product";
    return "Admin Panel";
  };

  return (
  <div className="h-16 bg-white shadow flex items-center justify-between px-6"> 
      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsOpen(true)}
      >
        ☰
      </button>

      <h2 className="text-xl font-semibold text-gray-800">
        {getTitle()}
      </h2>

      <div className="text-sm text-gray-500">
        Admin Dashboard
      </div>
    </div>
  );
};

export default Navbar;