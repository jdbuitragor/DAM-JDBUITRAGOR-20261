/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { setupataBase } from '.src/core/config';

setupataBase();

AppRegistry.registerComponent(appName, () => App);
