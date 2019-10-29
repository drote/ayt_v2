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
      <Route path='/(|search|playlist|related|home)' component={TopNav} />
      <Route path='(/related|/home|/playlist)' component={Content} />
      <Route exact path='/settings' component={SettingsModal} />
    </div>
  );
}

export default App;