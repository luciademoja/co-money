import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default class BackgroundGradient extends React.Component {
  render() {
    return (
      <Image source={require('../images/bg.png')} style={styles.bg}>
        {this.props.children}
      </Image>
      );
  }
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    resizeMode: 'cover'
  },
});