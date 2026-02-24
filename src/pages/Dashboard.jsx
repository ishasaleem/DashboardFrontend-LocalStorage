import React, { useEffect, useState } from 'react';
import DashboardCard from '../components/DashboardCard';

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <DashboardCard title="Total Products" count={products.length} />
  
    </div>
  );
};

export default Dashboard;