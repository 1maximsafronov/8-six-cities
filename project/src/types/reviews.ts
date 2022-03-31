export type Review = {
  id: number;
  text: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  rating: number;
}


export type Reviews = Review[]
