import type {Reviews} from '../types/reviews';

export const reviews: Reviews = [
  {
    id: 1,
    text: 'Какойто комментарий',
    author: {
      name: 'Alex',
      avatar: 'img/avatar-max.jpg',
    },
    date: '2019-04-24',
    rating: 5,
  },
  {
    id: 2,
    text: 'Ещё один коментарий',
    author: {
      name: 'Max',
      avatar: 'img/avatar-max.jpg',
    },
    date: '2019-04-24',
    rating: 3,
  },
  {
    id: 3,
    text: 'Очень плохой коментарий',
    author: {
      name: 'Alex',
      avatar: 'img/avatar-max.jpg',
    },
    date: '2019-04-24',
    rating: 5,
  },
];
