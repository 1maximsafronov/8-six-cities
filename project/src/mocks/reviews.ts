import type {Reviews} from '../types/reviews';

export const reviews: Reviews = [
  {
    text: 'Какойто комментарий',
    author: {
      name: 'Alex',
      avatar: 'img/avatar-max.jpg',
    },
    date: '2019-04-24',
    rating: 5,
  },
  {
    text: 'Ещё один коментарий',
    author: {
      name: 'Max',
      avatar: 'img/avatar-max.jpg',
    },
    date: '2019-04-24',
    rating: 3,
  },
  {
    text: 'Очень плохой коментарий',
    author: {
      name: 'Alex',
      avatar: 'img/avatar-max.jpg',
    },
    date: '2019-04-24',
    rating: 5,
  },
];
