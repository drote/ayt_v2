import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TopNav from './containers/topNav';
import Content from './containers/content';
import SideButtons from './containers/sideButtons';
import SettingsModal from './containers/settingsModal';

function App() {
  return (
    <div>
      <SideButtons />
      <Route exact path='/settings' component={SettingsModal}></Route>
      <Route
        path='/(|search|playlist|related|home)'
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
