/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {StyleSheet, useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import AuthNavigator from './src/navigator/AuthNavigator';
import {store} from './src/redux/store';
import * as RootNavigation from './src/utils/RootNavigation';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(45, 255, 136)',
  },
};

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <Provider store={store}>
        <NavigationContainer theme={MyTheme} ref={RootNavigation.navigationRef}>
          <AuthNavigator />
        </NavigationContainer>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
