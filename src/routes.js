import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// import Login from './pages/Login';
// import CreateAccount from './pages/CreateAccount';

// import Menu from './pages/Menu';
import Flavor from './pages/Flavor';
// import Repositories from './pages/Repositories';

const Routes = createAppContainer(
  createSwitchNavigator({
    // Login,
    // CreateAccount,
    // Menu,
    Flavor,
  }),
);

export default Routes;
