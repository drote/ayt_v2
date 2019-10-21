import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './components/main';
import SideButtons from './containers/sideButtons';
import SettingsModal from './containers/settingsModal';

function App() {
  return (
    <div>
      <SideButtons />
      <Route path='/(|search|playlist|related|home)' component={Main} />
      <Route exact path='/settings' component={SettingsModal}></Route>

    </div>
  );
}

export default App;
