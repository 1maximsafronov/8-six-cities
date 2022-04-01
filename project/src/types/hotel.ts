export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  name: string;
  location: Location;
};

export type Host = {
  id: number | string;
  name: string;
  isPro: boolean;
  avatarUrl: string;
};

export type Hotel = {
  id: number | string;
  type: string;
  price: number;
  title: string;
  goods: string[];
  images: string[];
  rating: number;
  bedrooms: number;
  isPremium: boolean;
  maxAdults: number;
  isFavorite: boolean;
  description: string;
  previewImage: string;
  city: City;
  host: Host;
  location: Location;
};

export type Hotels = Hotel[];
