import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './src/screens/HomeScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import IncidentsScreen from './src/screens/IncidentsScreen';
import JourneyScreen from './src/screens/JourneyScreen';
import PollingScreen from './src/screens/PollingScreen';
import ClosePollingScreen from './src/screens/ClosePollingScreen';
import OpenPollingScreen from './src/screens/OpenPollingScreen';

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Welcome: WelcomeScreen,
  Register: RegisterScreen,
  Incidents: IncidentsScreen,
  Journey: JourneyScreen,
  Polling: PollingScreen,
  ClosePolling: ClosePollingScreen,
  OpenPolling: OpenPollingScreen,
}, {
  initialRouteName: 'Welcome'
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
});


