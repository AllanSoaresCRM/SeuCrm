import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
import Products from './pages/Products';

import { 
  clientsData, 
  recentActivityData, 
  productsData, 
  professionalsData, 
  appointmentsData,
  dashboardStats,
  dateHelpers
} from './data';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedProfessional, setSelectedProfessional] = useState("all");
  const [currentWeek, setCurrentWeek] = useState(dateHelpers.getWeekDates());

  function getNextWeek() {
    const nextWeek = currentWeek.map(date => {
      const newDate = new Date(date);
      newDate.setDate(date.getDate() + 7);
      return newDate;
    });
    setCurrentWeek(nextWeek);
  }

  function getPreviousWeek() {
    const prevWeek = currentWeek.map(date => {
      const newDate = new Date(date);
      newDate.setDate(date.getDate() - 7);
      return newDate;
    });
    setCurrentWeek(prevWeek);
  }

  function getFilteredAppointments() {
    if (selectedProfessional === "all") {
      return appointmentsData;
    }
    return appointmentsData.filter(app => app.professionalId === selectedProfessional);
  }

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleClientClick = (clientId) => {
    const client = clientsData.find(c => c.id === clientId);
    setSelectedClient(client);
    setActiveSection('clients');
  };

  const resetClient = () => {
    setSelectedClient(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar 
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        resetClient={resetClient}
      />

      {/* Main Content */}
      <div className={`flex-1 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <Header />

        <main className="p-8">
          {activeSection === 'dashboard' && (
            <Dashboard 
              stats={dashboardStats}
              professionals={professionalsData}
              appointments={appointmentsData}
              recentActivity={recentActivityData}
              selectedProfessional={selectedProfessional}
              setSelectedProfessional={setSelectedProfessional}
              currentWeek={currentWeek}
              getNextWeek={getNextWeek}
              getPreviousWeek={getPreviousWeek}
              getFilteredAppointments={getFilteredAppointments}
              formatDate={dateHelpers.formatDate}
              formatDayName={dateHelpers.formatDayName}
              onClientClick={handleClientClick}
            />
          )}

          {activeSection === 'clients' && (
            <Clients 
              clients={clientsData}
              selectedClient={selectedClient}
              setSelectedClient={setSelectedClient}
            />
          )}

          {activeSection === 'products' && (
            <Products products={productsData} />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;