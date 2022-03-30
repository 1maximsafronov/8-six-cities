import type { Offers } from '../types/offer';

export const offers: Offers = [
  {
    id: 1,
    isPremium: false,
    price: 530,
    name: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment',
    picture: 'img/apartment-01.jpg',
  },{
    id: 2,
    isPremium: true,
    price: 1202,
    name: 'Lux hostel',
    type: 'Hostel',
    picture: 'img/apartment-02.jpg',
  },{
    id: 3,
    isPremium: true,
    price: 333,
    name: 'Some hotel name',
    type: 'Room',
    picture: 'img/apartment-03.jpg',
  },
];
