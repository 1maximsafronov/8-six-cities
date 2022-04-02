import Map from 'components/blocks/map/map';
import Host from 'components/blocks/property/host/host';
import Price from 'components/blocks/property/price/price';
import Inside from 'components/blocks/property/inside/inside';
import Rating from 'components/blocks/property/rating/rating';
import Gallery from 'components/blocks/property/gallery/gallery';
import Features from 'components/blocks/property/features/features';
import NearPlaces from 'components/blocks/near-places/near-places';
import PageHeader from 'components/blocks/page-header/page-header';
import BookmarkBtn from 'components/blocks/property/bookmark-btn/bookmark-btn';
import PremiumMark from 'components/blocks/property/premium-mark/premium-mark';
import ReviewsSection from 'components/blocks/reviews/reviews';

import {useAppSelector, useAppDispatch} from 'hooks/index';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {fetchHotelComments, fetchNearbyHotels, fetchOneHotel} from 'store/api-actions';
import { getCurrenHotel, getNearbyHotels, getReviews } from 'store/selectors';


function RoomPage():JSX.Element {
  const nearbyHotels = useAppSelector(getNearbyHotels);
  const currentHotel = useAppSelector(getCurrenHotel);
  const reviews = useAppSelector(getReviews);
  const dispatch = useAppDispatch();
  const {id} = useParams();

  useEffect(() => {
    dispatch(fetchOneHotel(id));
    dispatch(fetchHotelComments(id));
    dispatch(fetchNearbyHotels(id));
  }, [id]);

  if (currentHotel === null) {
    return <p>Loading...</p>;
  }

  const {
    city,
    host,
    type,
    price,
    goods,
    title,
    images,
    rating,
    bedrooms,
    maxAdults,
    isPremium,
    description,
    isFavorite,
  } = currentHotel;


  return (
    <div className="page">
      <PageHeader />

      <main className="page__main page__main--property">
        <section className="property">
          <Gallery images={images}/>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && <PremiumMark />}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <BookmarkBtn isActive={isFavorite}/>
              </div>
              <Rating value={rating}/>
              <Features
                maxAdults={maxAdults}
                bedrooms={bedrooms}
                type={type}
              />
              <Price value={price}/>
              <Inside goods={goods}/>
              <Host host={host}>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </Host>
              <ReviewsSection className='property__reviews' reviews={reviews}/>
            </div>
          </div>
          <Map className="property__map"
            selectedHotel={currentHotel}
            hotels={nearbyHotels}
            city={city}
          />
        </section>
        <div className="container">
          <NearPlaces hotels={nearbyHotels} />
        </div>
      </main>
    </div>
  );
}

export default RoomPage;
