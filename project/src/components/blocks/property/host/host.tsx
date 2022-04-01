import classNames from 'classnames';
import type {Host} from 'types/hotel';

type PropertyHostProps = {
  children?: React.ReactNode;
  host: Host;
};

function PropertyHost({children, host}:PropertyHostProps):JSX.Element {
  const {name, avatarUrl, isPro} = host;

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className={classNames(
          'property__avatar-wrapper user__avatar-wrapper',
          {'property__avatar-wrapper--pro': isPro},
        )}
        >
          <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
        </div>
        <span className="property__user-name">{name}</span>
        {isPro && <span className="property__user-status">Pro</span>}
      </div>
      {children}
    </div>
  );
}


export default PropertyHost;
