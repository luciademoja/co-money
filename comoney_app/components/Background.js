import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default class BackgroundGradient extends React.Component {
  render() {
    if(this.props.variant === 'gradient') {
      return (
          <Image source={require('../images/bg.png')} style={styles.gradient}>
            {this.props.children}
          </Image>
      );
    } else {
      return (
        <View style={styles.normal}>
          {this.props.children}
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent',
    resizeMode: 'cover'
  },
  normal: {
    flex: 1,
    width: '100%',
  }
});