import NearPlaces from 'components/blocks/near-places/near-places';
import PageHeader from 'components/blocks/page-header/page-header';

import {useAppSelector, useAppDispatch} from 'hooks/index';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {fetchHotelComments, fetchNearbyHotels, fetchOneHotel} from 'store/api-actions';
import { getCurrenHotel, getNearbyHotels, getReviews } from 'store/selectors';

import Property from 'components/blocks/property/property';
import { resetCurrentHotel } from 'store/action';

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

    return () => {
      dispatch(resetCurrentHotel());
    };
  }, [id]);


  if (currentHotel === null || !nearbyHotels || nearbyHotels.length <= 0) {
    return <p>Loading...</p>;
  }


  return (
    <div className="page">
      <PageHeader />

      <main className="page__main page__main--property">
        <Property
          hotel={currentHotel}
          nearbyHotels={nearbyHotels}
          reviews={reviews}
        />
        <div className="container">
          <NearPlaces hotels={nearbyHotels} />
        </div>
      </main>
    </div>
  );
}

export default RoomPage;
