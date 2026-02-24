import React from 'react';

const DashboardCard = ({ title, count }) => {
  return (
    <div className="bg-white shadow rounded p-6 w-64">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-3xl font-bold mt-2">{count}</p>
    </div>
  );
};

export default DashboardCard;