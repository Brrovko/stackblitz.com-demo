import React from 'react';
import { BarChart, Package, ShoppingCart, Users } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { title: 'Total Sales', value: '$12,426', icon: BarChart, change: '+12%' },
    { title: 'Active Products', value: '45', icon: Package, change: '+3' },
    { title: 'Pending Orders', value: '8', icon: ShoppingCart, change: '-2' },
    { title: 'Total Customers', value: '2,341', icon: Users, change: '+15%' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <stat.icon className="w-8 h-8 text-emerald-600" />
              <span className={`text-sm font-semibold ${
                stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-gray-600 text-sm">{stat.title}</h3>
            <p className="text-2xl font-bold text-gray-800 mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Add more dashboard content here */}
    </div>
  );
}