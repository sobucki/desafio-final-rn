import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
// import Repositories from './pages/Repositories';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    CreateAccount,
  }),
);

export default Routes;
