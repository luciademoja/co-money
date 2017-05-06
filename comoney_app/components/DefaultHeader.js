import React from 'react';
import { StyleSheet, Text, Image, View, StatusBar } from 'react-native';

export default class DefaultHeader extends React.Component {
  render() {
    return (
      <StatusBar
         backgroundColor="blue"
         barStyle="light-content"
       />
    );
  }
}

const styles = StyleSheet.create({
 
});