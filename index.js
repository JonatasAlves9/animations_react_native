/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Home from './src/screens/Home'
import NotFound from './src/screens/NotFound'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => NotFound);
