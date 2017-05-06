import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Loader extends React.Component {
  render() {
    return (
          <Image source={require('../../images/bg.png')} style={styles.container}>
            <Image
              source={require('../../images/comoney_logo/logo@2x.png')}
            />
            <Text style={styles.name}>comoney</Text>
            <Text style={styles.slogan}>Shared expenses</Text>
          </Image>
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
  name: {
    color: 'white',
    marginTop: '2%'
  },
  slogan: {
    color: 'white'
  }
});


