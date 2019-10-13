import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TopNav from './containers/topNav';
import SideButtons from './containers/sideButtons';

function App() {
  return (
    <div>
      <SideButtons />
      <Route path='/(|search|playlist|related)' component={TopNav} />
    </div>
  );
}

export default App;
