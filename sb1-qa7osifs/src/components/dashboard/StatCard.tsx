import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, trend }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <div className="mt-2 flex items-baseline justify-between">
        <p className="text-3xl font-semibold text-gray-900">{value}</p>
        <span className={`text-sm font-medium ${trend === 'up' ? (title === 'Clientes Inativos' ? 'text-red-600' : 'text-green-600') : 'text-red-600'}`}>
          {change}
        </span>
      </div>
    </div>
  );
};

export default StatCard;