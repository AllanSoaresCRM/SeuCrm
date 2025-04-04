import React from 'react';
import StatCard from '../components/dashboard/StatCard';
import WeeklySchedule from '../components/dashboard/WeeklySchedule';
import RecentActivity from '../components/dashboard/RecentActivity';

interface DashboardProps {
  stats: {
    clients: { value: string; change: string; trend: 'up' | 'down' };
    members: { value: string; change: string; trend: 'up' | 'down' };
    revenue: { value: string; change: string; trend: 'up' | 'down' };
    inactiveClients: { value: string; change: string; trend: 'up' | 'down' };
  };
  professionals: Array<{
    id: string;
    name: string;
    role: string;
    color: string;
  }>;
  appointments: Array<{
    id: string;
    clientId: string;
    clientName: string;
    professionalId: string;
    service: string;
    day: number;
    startHour: number;
    endHour: number;
    price: string;
  }>;
  recentActivity: Array<{
    id: string;
    name: string;
    time: string;
    code: string;
  }>;
  selectedProfessional: string;
  setSelectedProfessional: (id: string) => void;
  currentWeek: Date[];
  getNextWeek: () => void;
  getPreviousWeek: () => void;
  getFilteredAppointments: () => any[];
  formatDate: (date: Date) => string;
  formatDayName: (date: Date) => string;
  onClientClick: (id: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({
  stats,
  professionals,
  appointments,
  recentActivity,
  selectedProfessional,
  setSelectedProfessional,
  currentWeek,
  getNextWeek,
  getPreviousWeek,
  getFilteredAppointments,
  formatDate,
  formatDayName,
  onClientClick
}) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Total de Clientes" 
          value={stats.clients.value} 
          change={stats.clients.change} 
          trend={stats.clients.trend}
        />
        <StatCard 
          title="Total de Membros" 
          value={stats.members.value} 
          change={stats.members.change} 
          trend={stats.members.trend}
        />
        <StatCard 
          title="Total Faturado" 
          value={stats.revenue.value} 
          change={stats.revenue.change} 
          trend={stats.revenue.trend}
        />
        <StatCard 
          title="Clientes Inativos" 
          value={stats.inactiveClients.value} 
          change={stats.inactiveClients.change} 
          trend={stats.inactiveClients.trend}
        />
      </div>

      <WeeklySchedule 
        professionals={professionals}
        appointments={appointments}
        selectedProfessional={selectedProfessional}
        setSelectedProfessional={setSelectedProfessional}
        currentWeek={currentWeek}
        getNextWeek={getNextWeek}
        getPreviousWeek={getPreviousWeek}
        getFilteredAppointments={getFilteredAppointments}
        formatDate={formatDate}
        formatDayName={formatDayName}
      />

      <RecentActivity 
        activities={recentActivity}
        onClientClick={onClientClick}
      />
    </>
  );
};

export default Dashboard;