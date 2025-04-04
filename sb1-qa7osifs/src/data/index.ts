// Client data
export const clientsData = [
  {
    id: "001",
    name: "João Silva",
    phone: "(11) 98765-4321",
    email: "joao.silva@email.com",
    lastPurchase: "15/03/2024",
    totalSpent: "R$ 840,00",
    address: "Rua das Flores, 123 - São Paulo, SP",
    birthdate: "10/05/1985",
    notes: "Cliente prefere atendimento no período da tarde.",
    visits: [
      { date: "15/03/2024", service: "Corte + Barba", value: "R$ 80,00" },
      { date: "15/02/2024", service: "Corte", value: "R$ 50,00" },
      { date: "15/01/2024", service: "Corte + Barba", value: "R$ 80,00" }
    ]
  },
  {
    id: "002",
    name: "Pedro Santos",
    phone: "(11) 97654-3210",
    email: "pedro.santos@email.com",
    lastPurchase: "12/03/2024",
    totalSpent: "R$ 560,00",
    address: "Av. Paulista, 1000 - São Paulo, SP",
    birthdate: "22/07/1990",
    notes: "Cliente VIP, oferece sempre café.",
    visits: [
      { date: "12/03/2024", service: "Corte", value: "R$ 50,00" },
      { date: "12/02/2024", service: "Corte", value: "R$ 50,00" },
      { date: "12/01/2024", service: "Corte + Barba", value: "R$ 80,00" }
    ]
  },
  {
    id: "003",
    name: "Carlos Oliveira",
    phone: "(11) 96543-2109",
    email: "carlos.oliveira@email.com",
    lastPurchase: "10/03/2024",
    totalSpent: "R$ 1.240,00",
    address: "Rua Augusta, 500 - São Paulo, SP",
    birthdate: "15/03/1982",
    notes: "Prefere ser atendido pelo barbeiro Marcos.",
    visits: [
      { date: "10/03/2024", service: "Corte Premium + Barba", value: "R$ 120,00" },
      { date: "10/02/2024", service: "Corte Premium", value: "R$ 80,00" },
      { date: "10/01/2024", service: "Corte Premium + Barba", value: "R$ 120,00" }
    ]
  }
];

// Recent activity data
export const recentActivityData = [
  {
    id: "001",
    name: "Karen Hope",
    time: "12 minutos atrás",
    code: "INV-2023-001"
  },
  {
    id: "002",
    name: "Ruben Catzoni",
    time: "1 hora atrás",
    code: "INV-2023-002"
  },
  {
    id: "003",
    name: "Zain Vaccaro",
    time: "2 horas atrás",
    code: "INV-2023-003"
  }
];

// Products data
export const productsData = [
  {
    id: "p001",
    name: "Corte Masculino",
    description: "Corte tradicional com tesoura e máquina",
    duration: "30 minutos",
    price: "R$ 50,00",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p002",
    name: "Barba",
    description: "Aparar e modelar a barba com navalha",
    duration: "20 minutos",
    price: "R$ 40,00",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p003",
    name: "Corte + Barba",
    description: "Combo de corte masculino e barba",
    duration: "50 minutos",
    price: "R$ 80,00",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p004",
    name: "Corte Premium",
    description: "Corte personalizado com finalização especial",
    duration: "45 minutos",
    price: "R$ 80,00",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p005",
    name: "Hidratação Capilar",
    description: "Tratamento para cabelos ressecados",
    duration: "40 minutos",
    price: "R$ 60,00",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "p006",
    name: "Coloração",
    description: "Pintura de cabelo com produtos de qualidade",
    duration: "90 minutos",
    price: "R$ 120,00",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }
];

// Professionals data
export const professionalsData = [
  { id: "prof001", name: "Marcos Silva", role: "Barbeiro Sênior", color: "#4F46E5" },
  { id: "prof002", name: "Ana Oliveira", role: "Cabeleireira", color: "#EC4899" },
  { id: "prof003", name: "Rafael Santos", role: "Barbeiro", color: "#10B981" },
  { id: "prof004", name: "Juliana Costa", role: "Esteticista", color: "#F59E0B" }
];

// Appointments data
export const appointmentsData = [
  { 
    id: "app001", 
    clientId: "001", 
    clientName: "João Silva", 
    professionalId: "prof001", 
    service: "Corte + Barba", 
    day: 1, // Monday
    startHour: 10, 
    endHour: 11, 
    price: "R$ 80,00" 
  },
  { 
    id: "app002", 
    clientId: "002", 
    clientName: "Pedro Santos", 
    professionalId: "prof002", 
    service: "Corte", 
    day: 1, // Monday
    startHour: 14, 
    endHour: 15, 
    price: "R$ 50,00" 
  },
  { 
    id: "app003", 
    clientId: "003", 
    clientName: "Carlos Oliveira", 
    professionalId: "prof001", 
    service: "Corte Premium", 
    day: 2, // Tuesday
    startHour: 11, 
    endHour: 12, 
    price: "R$ 80,00" 
  },
  { 
    id: "app004", 
    clientId: "001", 
    clientName: "João Silva", 
    professionalId: "prof003", 
    service: "Barba", 
    day: 3, // Wednesday
    startHour: 16, 
    endHour: 17, 
    price: "R$ 40,00" 
  },
  { 
    id: "app005", 
    clientId: "002", 
    clientName: "Pedro Santos", 
    professionalId: "prof004", 
    service: "Hidratação Capilar", 
    day: 4, // Thursday
    startHour: 9, 
    endHour: 10, 
    price: "R$ 60,00" 
  },
  { 
    id: "app006", 
    clientId: "003", 
    clientName: "Carlos Oliveira", 
    professionalId: "prof001", 
    service: "Corte + Barba", 
    day: 5, // Friday
    startHour: 13, 
    endHour: 14, 
    price: "R$ 80,00" 
  },
  { 
    id: "app007", 
    clientId: "001", 
    clientName: "João Silva", 
    professionalId: "prof002", 
    service: "Coloração", 
    day: 6, // Saturday
    startHour: 10, 
    endHour: 12, 
    price: "R$ 120,00" 
  }
];

// Dashboard stats
export const dashboardStats = {
  clients: { value: "450", change: "+16%", trend: "up" },
  members: { value: "350", change: "+10%", trend: "up" },
  revenue: { value: "R$ 3.68K", change: "-8%", trend: "down" },
  inactiveClients: { value: "78", change: "+12%", trend: "up" }
};

// Helper functions for date handling
export const dateHelpers = {
  getWeekDates: () => {
    const today = new Date();
    const day = today.getDay(); // 0 is Sunday, 1 is Monday, etc.
    const diff = today.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
    
    const monday = new Date(today.setDate(diff));
    const weekDates = [];
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      weekDates.push(date);
    }
    
    return weekDates;
  },
  
  formatDate: (date: Date) => {
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
  },
  
  formatDayName: (date: Date) => {
    return date.toLocaleDateString('pt-BR', { weekday: 'short' }).slice(0, 3);
  }
};