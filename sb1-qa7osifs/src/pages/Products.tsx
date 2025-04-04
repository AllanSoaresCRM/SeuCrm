import React from 'react';
import ProductList from '../components/products/ProductList';

interface Product {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  image: string;
}

interface ProductsProps {
  products: Product[];
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  return <ProductList products={products} />;
};

export default Products;