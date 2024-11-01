import React, { useState } from 'react';
import ProductCard from '../../components/ProductCard';
import { Product } from '../../types';
import { Search, Filter } from 'lucide-react';

export default function ShopProducts() {
  const [products] = useState<Product[]>([
    {
      id: '1',
      name: 'Organic Almonds',
      category: 'nuts',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&q=80&w=800',
      description: 'Premium California almonds, raw and unsalted',
      stock: 100,
      sellerId: '1'
    },
    // Add more products here
  ]);

  return (
    <div className="p-6">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-800">Shop</h1>
          <button className="flex items-center text-gray-600 hover:text-gray-800">
            <Filter className="w-5 h-5 mr-2" />
            Filter
          </button>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={(product) => console.log('Add to cart:', product)}
          />
        ))}
      </div>
    </div>
  );
}