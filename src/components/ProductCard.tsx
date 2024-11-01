import React from 'react';
import { Product } from '../types';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  isAdmin?: boolean;
  onAddToCart?: (product: Product) => void;
  onEdit?: (product: Product) => void;
}

export default function ProductCard({ product, isAdmin, onAddToCart, onEdit }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-1">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-emerald-600 font-bold">${product.price.toFixed(2)}</span>
          {isAdmin ? (
            <button
              onClick={() => onEdit?.(product)}
              className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700"
            >
              Edit
            </button>
          ) : (
            <button
              onClick={() => onAddToCart?.(product)}
              className="bg-emerald-600 text-white p-2 rounded-full hover:bg-emerald-700"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}