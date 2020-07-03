import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search'
    }
  }
);

// app.js file is a special file - when app first starts up, anything exported from this file will be taken and shown on screen of device. In this case, we're not exporting a component per se, we're exporting a React component created by "CreateAppContainer" with whatever navigator needs to show.
export default createAppContainer(navigator);
