import React from 'react';
import ClientRow from './ClientRow';

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

interface ClientListProps {
  clients: Client[];
  onClientSelect: (client: Client) => void;
}

const ClientList: React.FC<ClientListProps> = ({ clients, onClientSelect }) => {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Clientes</h2>
        <p className="text-gray-600">Gerenciamento de clientes</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <input
            type="text"
            placeholder="Buscar cliente..."
            className="px-4 py-2 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Importar Dados
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Exportar Dados
            </button>
          </div>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telefone</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Última Compra</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Gasto</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {clients.map((client) => (
              <ClientRow
                key={client.id}
                id={client.id}
                name={client.name}
                phone={client.phone}
                email={client.email}
                lastPurchase={client.lastPurchase}
                totalSpent={client.totalSpent}
                onClick={() => onClientSelect(client)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ClientList;