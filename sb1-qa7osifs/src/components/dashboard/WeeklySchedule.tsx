import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Professional {
  id: string;
  name: string;
  role: string;
  color: string;
}

interface Appointment {
  id: string;
  clientId: string;
  clientName: string;
  professionalId: string;
  service: string;
  day: number;
  startHour: number;
  endHour: number;
  price: string;
}

interface WeeklyScheduleProps {
  professionals: Professional[];
  appointments: Appointment[];
  selectedProfessional: string;
  setSelectedProfessional: (id: string) => void;
  currentWeek: Date[];
  getNextWeek: () => void;
  getPreviousWeek: () => void;
  getFilteredAppointments: () => Appointment[];
  formatDate: (date: Date) => string;
  formatDayName: (date: Date) => string;
}

const WeeklySchedule: React.FC<WeeklyScheduleProps> = ({
  professionals,
  appointments,
  selectedProfessional,
  setSelectedProfessional,
  currentWeek,
  getNextWeek,
  getPreviousWeek,
  getFilteredAppointments,
  formatDate,
  formatDayName
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Agenda Semanal</h3>
        <div className="flex items-center space-x-4">
          <select 
            className="px-4 py-2 border border-gray-300 rounded-lg"
            value={selectedProfessional}
            onChange={(e) => setSelectedProfessional(e.target.value)}
          >
            <option value="all">Todos os Profissionais</option>
            {professionals.map(prof => (
              <option key={prof.id} value={prof.id}>{prof.name}</option>
            ))}
          </select>
          <div className="flex items-center space-x-2">
            <button 
              onClick={getPreviousWeek}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={getNextWeek}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <div className="min-w-full">
          <div className="grid grid-cols-8 gap-2 mb-2">
            <div className="text-center font-medium text-gray-500 py-2">Horário</div>
            {currentWeek.map((date, index) => (
              <div key={index} className="text-center">
                <div className="font-medium text-gray-800">{formatDayName(date)}</div>
                <div className="text-sm text-gray-500">{formatDate(date)}</div>
              </div>
            ))}
          </div>
          
          <div className="space-y-1">
            {Array.from({ length: 10 }, (_, i) => i + 8).map(hour => (
              <div key={hour} className="grid grid-cols-8 gap-2">
                <div className="text-center text-sm text-gray-500 py-2">{`${hour}:00`}</div>
                {Array.from({ length: 7 }, (_, day) => day + 1).map(day => {
                  const appointment = getFilteredAppointments().find(
                    app => app.day === day && app.startHour <= hour && app.endHour > hour
                  );
                  
                  if (appointment) {
                    const professional = professionals.find(p => p.id === appointment.professionalId);
                    const isStart = appointment.startHour === hour;
                    const duration = appointment.endHour - appointment.startHour;
                    
                    if (isStart) {
                      return (
                        <div 
                          key={day}
                          className="rounded-lg p-2 text-white text-sm"
                          style={{ 
                            backgroundColor: professional.color,
                            gridRow: `span ${duration}`
                          }}
                        >
                          <div className="font-medium">{appointment.clientName}</div>
                          <div className="text-xs">{appointment.service}</div>
                          <div className="text-xs mt-1">{professional.name}</div>
                        </div>
                      );
                    }
                    return <div key={day}></div>; // Empty cell for continuation of appointment
                  }
                  
                  return (
                    <div 
                      key={day} 
                      className="border border-gray-100 rounded-lg hover:bg-gray-50 cursor-pointer"
                    ></div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklySchedule;