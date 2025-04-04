import React from 'react';
import { Calendar, Menu, X, BarChart2, Mail, Briefcase, List, CheckSquare, Archive, Users } from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  isOpen: boolean;
  active?: boolean;
  onClick: () => void;
}

function NavItem({ icon, text, isOpen, active = false, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center px-4 py-3 ${
        active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
      }`}
    >
      <span className="w-6 h-6">{icon}</span>
      {isOpen && <span className="ml-3 text-sm">{text}</span>}
    </button>
  );
}

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  resetClient: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  isSidebarOpen, 
  toggleSidebar, 
  activeSection, 
  setActiveSection,
  resetClient
}) => {
  return (
    <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-white border-r border-gray-200 transition-all duration-300 ease-in-out flex flex-col h-screen fixed`}>
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <Calendar className="w-8 h-8 text-blue-600" />
          <h1 className={`font-bold text-xl text-blue-600 ${!isSidebarOpen && 'hidden'}`}>AgendAi</h1>
        </div>
      </div>
      
      <nav className="flex-1 py-4">
        <div className={`px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 ${!isSidebarOpen && 'hidden'}`}>
          Principal
        </div>
        <NavItem 
          icon={<BarChart2 />} 
          text="Dashboard" 
          isOpen={isSidebarOpen} 
          active={activeSection === 'dashboard'} 
          onClick={() => setActiveSection('dashboard')}
        />
        <NavItem 
          icon={<List />} 
          text="Lista de Tarefas" 
          isOpen={isSidebarOpen} 
          onClick={() => setActiveSection('tasks')}
        />
        <NavItem 
          icon={<Mail />} 
          text="Email" 
          isOpen={isSidebarOpen} 
          onClick={() => setActiveSection('email')}
        />
        <NavItem 
          icon={<CheckSquare />} 
          text="Relatórios" 
          isOpen={isSidebarOpen} 
          onClick={() => setActiveSection('reports')}
        />

        <div className={`mt-8 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 ${!isSidebarOpen && 'hidden'}`}>
          Registros
        </div>
        <NavItem 
          icon={<Briefcase />} 
          text="Empresa" 
          isOpen={isSidebarOpen} 
          onClick={() => setActiveSection('company')}
        />
        <NavItem 
          icon={<Users />} 
          text="Equipe" 
          isOpen={isSidebarOpen} 
          onClick={() => setActiveSection('team')}
        />

        <div className={`mt-8 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 ${!isSidebarOpen && 'hidden'}`}>
          Listas
        </div>
        <NavItem 
          icon={<Users />} 
          text="Clientes" 
          isOpen={isSidebarOpen} 
          active={activeSection === 'clients'} 
          onClick={() => {
            setActiveSection('clients');
            resetClient();
          }}
        />
        <NavItem 
          icon={<Archive />} 
          text="Produtos" 
          isOpen={isSidebarOpen}
          active={activeSection === 'products'} 
          onClick={() => setActiveSection('products')}
        />
      </nav>

      <div className="p-4 border-t border-gray-200">
        <button onClick={toggleSidebar} className="p-2 hover:bg-gray-100 rounded-lg w-full flex items-center justify-center">
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;