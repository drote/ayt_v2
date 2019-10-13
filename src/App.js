import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TopNav from './containers/topNav';
import Content from './containers/content';
import SideButtons from './containers/sideButtons';

function App() {
  return (
    <div>
      <SideButtons />
      <Route
        path='/(|search|playlist|related)'
        render={({ location }) => (
          <div>
            <TopNav location={location} />
            <Content location={location} />
          </div>
        )}
      />
    </div>
  );
}

export default App;
