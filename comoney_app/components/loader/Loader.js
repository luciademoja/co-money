import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import BackgroundGradient from '../background/BackgroundGradient';

export default class Loader extends React.Component {
  render() {
    return (
          <BackgroundGradient>
            <Image
              style={styles.logo}
              source={require('../../images/comoney_logo/logo@2x.png')}
            />
            <Text style={styles.name}>comoney</Text>
            <Text style={styles.slogan}>shared expenses</Text>
          </BackgroundGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    resizeMode: 'cover'
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


