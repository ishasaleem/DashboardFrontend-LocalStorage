import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 transition-transform duration-300 z-50`}
      >
        <h1 className="text-2xl font-bold p-4 border-b border-gray-700">
          Admin Panel
        </h1>

        <nav className="flex flex-col p-4 space-y-2">
          <Link to="/" className="hover:bg-gray-700 p-2 rounded">
            Dashboard
          </Link>
          <Link to="/products" className="hover:bg-gray-700 p-2 rounded">
            Products
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;