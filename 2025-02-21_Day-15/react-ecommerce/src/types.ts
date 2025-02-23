export interface IUserCreds {
  id: string;
  username: string;
  password: string;
}
export interface IUserDetails extends IUserCreds {
  email: string;
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
export interface AuthToken {
  token: string;
}
export interface ICartProduct {
  productId: number;
  quantity: number;
}
export interface ICart {
  id: number;
  userId: number;
  date: string;
  products: ICartProduct[];
}
export interface IProductDetails {
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
export interface CartItemProps {
  title: string;
  price: number;
  quantity: number;
  image: string;
}
export interface ICart {
  id: number;
  userId: number;
  date: string;
  products: ICartProduct[];
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
}
