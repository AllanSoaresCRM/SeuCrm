import React from 'react';

interface ActivityItemProps {
  id: string;
  name: string;
  time: string;
  code: string;
  onClick: (id: string) => void;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ id, name, time, code, onClick }) => {
  return (
    <div 
      className="flex items-center justify-between py-2 cursor-pointer hover:bg-gray-50 rounded-lg px-2"
      onClick={() => onClick(id)}
    >
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
        <div>
          <p className="text-sm font-medium text-gray-900">{name}</p>
          <p className="text-xs text-gray-500">{time}</p>
        </div>
      </div>
      <span className="text-sm text-gray-600">{code}</span>
    </div>
  );
};

export default ActivityItem;