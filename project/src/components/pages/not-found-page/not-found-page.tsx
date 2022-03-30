import PageHeader from '../../blocks/page-header/page-header';

function NotFoundPage():JSX.Element {
  return(
    <div className="page page--favorites-empty">
      <PageHeader />

      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Page not found</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">404</b>
              <p className="favorites__status-description">Page not found</p>
            </div>
          </section>
        </div>
      </main>
      <footer className="footer">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default NotFoundPage;
