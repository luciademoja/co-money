import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import Background from './Background';

export default class Loader extends React.Component {
  render() {
    return (
      <Background variant='gradient'>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require('../images/comoney_logo/logo@2x.png')}
          />
          <Text style={styles.name}>comoney</Text>
          <Text style={styles.slogan}>shared expenses</Text>
        </View>
      </Background>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    marginTop: -40
  },
  name: {
    color: 'white',
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold'
  },
  slogan: {
    color: 'white',
    fontSize: 12
  }
});