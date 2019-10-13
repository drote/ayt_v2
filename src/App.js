import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TopNav from './containers/topNav';

function App() {
  return (
    <div>
      <Route component={TopNav} />
    </div>
  );
}

export default App;
