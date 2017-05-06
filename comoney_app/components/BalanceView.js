import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import Background from './Background';


export default class BalanceView extends React.Component {
  render() {
    return (
      <Background variant='gradient'>
        <View style={styles.container}>
          <Text style={styles.balancePercent}>
            43%
          </Text>
          <View style={styles.textContainer}>
            <Text style={styles.heading}>
              Hej Anna!
            </Text>
            <Text style={styles.paragraph}>
              Du har betalat 1057 kr mindre än Johan. Era gemensamma utgifter denna månaden är 11 500 kr.
            </Text>
          </View>
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
  balancePercent: {
    position: 'absolute',
    top: '23%',
    color: 'rgba(255,255,255,0.15)',
    fontSize: 162,
    fontWeight: 'bold'
  },
  textContainer: {
    justifyContent: 'flex-start',
    width: '100%',
    paddingLeft: 25
  },
  heading: {
   fontSize: 42,
   color: 'white',
   fontWeight: 'bold'
  },
  paragraph: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    maxWidth: 300,
  }
});