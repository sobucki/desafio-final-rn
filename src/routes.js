import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';

import Menu from './pages/Menu';
import Flavor from './pages/Flavor';
import Size from './pages/Size';
import Cart from './pages/Cart';
import HistoryOrder from './pages/HistoryOrder';
import FinishOrder from './pages/FinishOrder';
// import Repositories from './pages/Repositories';

const MenuStack = createStackNavigator(
  {
    Menu,
    Size,
    Flavor,
    Cart,
    FinishOrder,
  },
  {
    headerLayoutPreset: 'center',
    headerMode: 'float',
    headerBackTitleVisible: true,
    defaultNavigationOptions: {
      headerTintColor: '#FFF',
      headerStyle: {
        backgroundColor: '#0b2031',
        elevation: 0,
        shadowColor: 'transparent',
        shadowRadius: 0,
        shadowOffset: {
          height: 0,
        },
      },
    },
  },
);

const Routes = (userLogged = false) => createAppContainer(
  createSwitchNavigator(
    {
      Login,
      CreateAccount,
      Menu: { screen: MenuStack },
      // HistoryOrder,
    },
    {
      initialRouteName: userLogged ? 'Menu' : 'Login',
    },
  ),
);

export default Routes;
