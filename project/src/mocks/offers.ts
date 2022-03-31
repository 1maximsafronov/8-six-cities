import type { Offers, City } from '../types/offer';

export const offers: Offers = [
  {
    id: 1,
    isPremium: false,
    price: 530,
    name: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment',
    picture: 'img/apartment-01.jpg',
    city: {
      title: 'Paris',
      lat: 52.3909553943508,
      lng: 4.85309666406198,
    },
  },{
    id: 2,
    isPremium: true,
    price: 1202,
    name: 'Lux hostel',
    type: 'Hostel',
    picture: 'img/apartment-02.jpg',
    city: {
      title: 'Amsterdam',
      lat: 52.369553943508,
      lng: 4.85309666406198,
    },
  },{
    id: 3,
    isPremium: true,
    price: 333,
    name: 'Some hotel name',
    type: 'Room',
    picture: 'img/apartment-03.jpg',
    city: {
      title: 'Amsterdam',
      lat: 52.3909553943508,
      lng: 4.929309666406198,
    },
  },
];


export const CITY: City = {
  title: 'Нью-Йорк',
  lat: 52.3809553943508,
  lng: 4.939309666406198,
  zoom: 10,
};


/*
    - 52.3909553943508, 4.85309666406198
    - 52.369553943508, 4.85309666406198
    - 52.3909553943508, 4.929309666406198
      52.3809553943508, 4.939309666406198
*/
