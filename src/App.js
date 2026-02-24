import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import ProductManagement from './pages/ProductManagement';
import AddEditProduct from './pages/AddEditProduct';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="md:ml-64">
        <Navbar setIsOpen={setIsOpen} />

        <div className="p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<ProductManagement />} />
            <Route path="/products/add" element={<AddEditProduct />} />
            <Route path="/products/edit/:id" element={<AddEditProduct />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;