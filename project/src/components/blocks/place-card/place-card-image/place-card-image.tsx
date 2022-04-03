import { Link } from 'react-router-dom';
import classNames from 'classnames';

function PlaceCardImage(props: Props):JSX.Element {
  const {
    src,
    alt,
    hotelId,
    width = 260,
    height = 200,
    className,
  } = props;

  return (
    <div className={classNames(className, 'place-card__image-wrapper')}>
      <Link to={`/offer/${hotelId}`}>
        <img className="place-card__image"
          alt={`Place ${alt}`}
          height={height}
          width={width}
          src={src}
        />
      </Link>
    </div>
  );
}

type Props = {
  hotelId: number | string;
  className?:string;
  width?: number;
  height?: number;
  alt: string;
  src: string;
}

export default PlaceCardImage;
