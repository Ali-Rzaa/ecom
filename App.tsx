/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme
} from 'react-native';
import ProductListPage from './src/pages/ProductListPage/ProductListPage';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <ProductListPage />
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic">
      </ScrollView> */}
    </SafeAreaView>
  );
}

export default App;
