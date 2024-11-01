import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ShoppingBag } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-emerald-800 mb-6">
            Welcome to Harvest Haven
          </h1>
          <p className="text-xl text-emerald-600 mb-12">
            Your premium marketplace for fresh fruits and premium nuts
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link
              to="/products"
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <ShoppingBag className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-emerald-800 mb-2">Shop Now</h2>
              <p className="text-emerald-600">Browse our selection of fresh fruits and nuts</p>
            </Link>
            
            <Link
              to="/admin"
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <Leaf className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-emerald-800 mb-2">Seller Portal</h2>
              <p className="text-emerald-600">Manage your products and orders</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}