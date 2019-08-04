import '~/config/ReactotronConfig';
import '~/config/DevToolsConfig';
import '~/config/StatusBarConfig';

import React, { Component } from 'react';

import { Provider } from 'react-redux';
import store from '~/store';

import createNavigator from './routes';

export default class App extends Component {
  state = {
    userLogged: true,
  };

  render() {
    const { userLogged } = this.state;
    const Routes = createNavigator(userLogged);
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
