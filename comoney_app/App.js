import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loader from './components/Loader';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Loader />
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
