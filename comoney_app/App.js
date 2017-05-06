import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Loader from './components/Loader';
import BalanceView from './components/BalanceView';
import ReceiptsView from './components/ReceiptsView';
import AppNavigation from './components/AppNavigation';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <BalanceView />
        <AppNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',
    alignItems: 'center',
    justifyContent: 'space-around',
  }
});
