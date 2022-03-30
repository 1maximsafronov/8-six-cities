export type Review = {
  text: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  rating: number;
}


export type Reviews = Review[]
