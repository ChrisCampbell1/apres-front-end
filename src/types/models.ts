/* ---------===== custom props ====--------- */

export interface Listing {
  id: number;
  title: string;
  image?: string;
  description: string;
  category: string;
  condition: number;
  sellerId: number;
  buyerId: number;
  status: string;
  manufacturer: string;
  yearManufactured: number;
  dimensions: string;
  material: string;
  price: number;
  seller: Profile;
  buyer: Profile;
  createdAt: string;
  updatedAt: string;
}


/* ---------===== auth models =====--------- */

export interface Profile {
  name: string;
  photo?: string;
  email: string;
  id: number;
  about: string;
  city: string;
  state: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  name: string;
  email: string;
  profile: { id: number };
  id: number;
  createdAt: string;
  updatedAt: string;
}
