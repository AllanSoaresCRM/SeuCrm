import React from 'react';
import ClientList from '../components/clients/ClientList';
import ClientDetail from '../components/clients/ClientDetail';

interface Client {
  id: string;
  name: string;
  phone: string;
  email: string;
  lastPurchase: string;
  totalSpent: string;
  address: string;
  birthdate: string;
  notes: string;
  visits: Array<{
    date: string;
    service: string;
    value: string;
  }>;
}

interface ClientsProps {
  clients: Client[];
  selectedClient: Client | null;
  setSelectedClient: (client: Client | null) => void;
}

const Clients: React.FC<ClientsProps> = ({ clients, selectedClient, setSelectedClient }) => {
  const handleClientSelect = (client: Client) => {
    setSelectedClient(client);
  };

  const handleBackToClients = () => {
    setSelectedClient(null);
  };

  return (
    <>
      {!selectedClient ? (
        <ClientList 
          clients={clients} 
          onClientSelect={handleClientSelect} 
        />
      ) : (
        <ClientDetail 
          client={selectedClient} 
          onBack={handleBackToClients} 
        />
      )}
    </>
  );
};

export default Clients;