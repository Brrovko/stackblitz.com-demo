import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBasket, User, Store } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <nav className="bg-emerald-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Store className="w-8 h-8" />
            <span className="font-bold text-xl">Harvest Haven</span>
          </Link>

          <div className="flex items-center space-x-4">
            {isAdmin ? (
              <>
                <Link to="/admin/products" className="hover:text-emerald-200">Products</Link>
                <Link to="/admin/orders" className="hover:text-emerald-200">Orders</Link>
              </>
            ) : (
              <>
                <Link to="/products" className="hover:text-emerald-200">Shop</Link>
                <Link to="/cart" className="hover:text-emerald-200">
                  <ShoppingBasket className="w-6 h-6" />
                </Link>
              </>
            )}
            <Link to={isAdmin ? "/admin/profile" : "/profile"} className="hover:text-emerald-200">
              <User className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}