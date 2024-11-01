export interface Product {
  id: string;
  name: string;
  category: 'fruits' | 'nuts';
  price: number;
  image: string;
  description: string;
  stock: number;
  sellerId: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'customer';
}

export interface CartItem extends Product {
  quantity: number;
}