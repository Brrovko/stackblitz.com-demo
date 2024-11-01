import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import ProductCard from '../../components/ProductCard';
import { Product } from '../../types';

export default function AdminProducts() {
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
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Products</h1>
        <button className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 flex items-center">
          <Plus className="w-5 h-5 mr-2" />
          Add Product
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isAdmin={true}
            onEdit={(product) => console.log('Edit product:', product)}
          />
        ))}
      </div>
    </div>
  );
}