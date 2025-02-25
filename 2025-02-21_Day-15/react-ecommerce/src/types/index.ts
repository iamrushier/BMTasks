import React from "react";

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
export interface IAuthToken {
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
export type ICartItemProps = Pick<
  IProductDetails,
  "id" | "title" | "price" | "image"
> & {
  quantity: number;
};

export interface IProductCardProps {
  product: IProductDetails;
}

export interface IAdminContextType {
  isAuthorizedAdmin: boolean;
  verifyAdminLogin: (uname: string, passwd: string) => boolean;
}
export type ProductContextType = {
  products: IProductDetails[];
  dispatch: React.Dispatch<{
    type: string;
    item?: IProductDetails;
    products?: IProductDetails[];
  }>;
};
export type CartContextType = {
  cart: ICart;
  dispatch: React.Dispatch<{ type: string; item?: ICartProduct; cart?: ICart }>;
};
export type UserContextType = {
  loggedInUser: IUserCreds;
  dispatch: React.ActionDispatch<[action: { type: string; data: IUserCreds }]>;
};
