import React from 'react';

interface ClientRowProps {
  id: string;
  name: string;
  phone: string;
  email: string;
  lastPurchase: string;
  totalSpent: string;
  onClick: () => void;
}

const ClientRow: React.FC<ClientRowProps> = ({ id, name, phone, email, lastPurchase, totalSpent, onClick }) => {
  return (
    <tr className="hover:bg-gray-50 cursor-pointer" onClick={onClick}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          <div className="text-sm font-medium text-gray-900">{name}</div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{phone}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{email}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{lastPurchase}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{totalSpent}</div>
      </td>
    </tr>
  );
};

export default ClientRow;