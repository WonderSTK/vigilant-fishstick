import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

const StatCard = ({ title, value, change }) => {
  const isPositive = change >= 0;
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-2xl font-semibold text-gray-900 mb-2">{value}</p>
      <p className={`text-sm flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {isPositive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
        <span className="ml-1">{Math.abs(change)}%</span>
        <span className="ml-1 text-gray-500">Compared to last month</span>
      </p>
      
    </div>
  );
};

const StatCards = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard title="Total Income" value={`$${data.totalIncome.toLocaleString()}`} change={data.totalIncomeChange} />
      <StatCard title="Profit" value={`$${data.profit.toLocaleString()}`} change={data.profitChange} />
      <StatCard title="Total Views" value={data.totalViews.toLocaleString()} change={data.totalViewsChange} />
      <StatCard title="Conversion Rate" value={`${data.conversionRate}%`} change={data.conversionRateChange} />
    </div>
  );
};

export default StatCards;
