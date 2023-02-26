/* ---------==== custom forms ====--------- */
export interface NewListingFormData {
  title: string;
  description: string;
  category: string;
  condition?: number;
  manufacturer?: string;
  yearManufactured?: string;
  dimensions?: string;
  material?: string;
  price: number;
}

export interface FilterData {
  price?: number;
}

export interface EditListingFormData {
  title: string;
  description: string;
  status: string;
  category: string;
  condition?: number;
  manufacturer?: string;
  yearManufactured?: string;
  dimensions?: string;
  material?: string;
  price: number;
}

export interface ListingPhotoFormData {
  image: File | null;
}

/* ---------===== auth forms =====--------- */

export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData {
  name: string;
  email: string;
  password: string;
  passwordConf: string;
  city?: string;
  state?: string;
  about?: string;
}

export interface ChangePasswordFormData {
  oldPassword: string;
  newPassword: string;
  newPasswordConf: string;
}

export interface PhotoFormData {
  photo: File | null;
}
