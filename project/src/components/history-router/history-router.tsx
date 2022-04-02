import type { BrowserHistory } from 'history';
import { useLayoutEffect, useState, PropsWithChildren } from 'react';
import { Router } from 'react-router-dom';


function HistoryRouter(props:HistoryRouterProps):JSX.Element {
  const {children, baseName,history} = props;

  const initState = {
    action: history.action,
    location: history.location,
  };

  useLayoutEffect(() => history.listen(setState), [history]);

  const [state, setState] =useState(initState);
  return (
    <Router
      basename={baseName}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
}

type HistoryRouterProps = PropsWithChildren<{
    history: BrowserHistory
    baseName?: string
}>


export default HistoryRouter;
