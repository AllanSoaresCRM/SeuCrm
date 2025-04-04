import React from 'react';
import { Clock, MoreVertical } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isMenuOpen, toggleMenu }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="flex">
        <div className="w-24 h-24 bg-gray-100 flex-shrink-0">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 p-4">
          <div className="flex justify-between">
            <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
            <div className="relative">
              <button 
                onClick={toggleMenu}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <MoreVertical className="w-5 h-5 text-gray-500" />
              </button>
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                  <div className="py-1">
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Editar
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                      Excluir
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-1">{product.description}</p>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-1" />
              {product.duration}
            </div>
            <p className="font-bold text-gray-900">{product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;