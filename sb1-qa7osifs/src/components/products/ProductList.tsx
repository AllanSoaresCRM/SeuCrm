import React, { useState } from 'react';
import ProductHeader from './ProductHeader';
import ProductCard from './ProductCard';

interface Product {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  image: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [productMenuOpen, setProductMenuOpen] = useState<string | null>(null);

  const toggleProductMenu = (productId: string) => {
    if (productMenuOpen === productId) {
      setProductMenuOpen(null);
    } else {
      setProductMenuOpen(productId);
    }
  };

  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Produtos</h2>
        <p className="text-gray-600">Gerenciamento de produtos e serviços</p>
      </div>

      <ProductHeader productCount={products.length} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            product={product}
            isMenuOpen={productMenuOpen === product.id}
            toggleMenu={() => toggleProductMenu(product.id)}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;