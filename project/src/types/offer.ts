export type Offer = {
  isPremium: boolean;
  picture: string;
  price: number;
  name: string;
  type: string;
  id: number | string;
}

export type Offers = Offer[];
