export interface Address {
  street: string;
  city: string;
  zipcode: string;
}

export interface Company {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
}
