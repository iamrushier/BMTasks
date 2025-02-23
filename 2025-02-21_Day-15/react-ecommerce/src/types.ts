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
