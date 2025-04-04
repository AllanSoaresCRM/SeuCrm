import React from 'react';
import { Archive, Search, Plus } from 'lucide-react';

interface ProductHeaderProps {
  productCount: number;
}

const ProductHeader: React.FC<ProductHeaderProps> = ({ productCount }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="bg-blue-50 p-3 rounded-lg">
            <Archive className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Produtos Cadastrados</p>
            <p className="text-xl font-bold">{productCount}</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar produto..."
              className="pl-10 px-4 py-2 border border-gray-300 rounded-lg w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Plus className="w-5 h-5" />
            <span>Cadastrar Novo Produto</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;