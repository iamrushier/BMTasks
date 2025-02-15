export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
export interface cartEntry {
  userId: number;
  date: string;
  products: { productId: number; quantity: number }[];
}
export interface User {
  username: string;
  password: string;
}
export interface AuthToken {
  token: string;
}
export interface loggedInUser {
  id: number;
  username: string;
  password: string;
}
export interface UserDetails {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone: string;
}
export type Categories = string[];
export interface Cart {
  id: number;
  userId: number;
  date: string;
  products: { productId: number; quantity: number }[];
}
