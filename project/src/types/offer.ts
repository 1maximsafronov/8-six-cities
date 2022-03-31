export type Offer = {
  isPremium: boolean;
  picture: string;
  price: number;
  name: string;
  type: string;
  city: Point;
  id: number | string;
}

export type Offers = Offer[];

export type City = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

export type Point = {
  title: string;
  lat: number;
  lng: number;
};

export type Points = Point[];
