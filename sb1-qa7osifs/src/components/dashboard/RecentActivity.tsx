import React from 'react';
import ActivityItem from './ActivityItem';

interface Activity {
  id: string;
  name: string;
  time: string;
  code: string;
}

interface RecentActivityProps {
  activities: Activity[];
  onClientClick: (id: string) => void;
}

const RecentActivity: React.FC<RecentActivityProps> = ({ activities, onClientClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Atividade Recente</h3>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Ver Tudo</button>
      </div>
      <div className="space-y-4">
        {activities.map((activity) => (
          <ActivityItem 
            key={activity.code}
            id={activity.id}
            name={activity.name}
            time={activity.time}
            code={activity.code}
            onClick={onClientClick}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;