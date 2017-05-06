import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import Background from './Background';


export default class ReceiptsView extends React.Component {
  render() {
    return (
      <Background variant='gradient'>
        <View style={styles.container}>
          <ReceiptItem
            store='Seven Eleven'
            date='23 Mars'
            amount='170kr'
            user='Anna'
          />
          <ReceiptItem
            store='Seven Eleven'
            date='23 Mars'
            amount='170kr'
            user='Anna'
          />
          <ReceiptItem
            store='Seven Eleven'
            date='23 Mars'
            amount='170kr'
            user='Anna'
          />
        </View>
      </Background>
    );
  }
}

const ReceiptItem = (props) => {
  return(
    <View style={styles.receiptItem}>
      <View style={styles.receiptItemColumn}>
        <Text style={styles.large}>{props.store}</Text>
        <Text style={styles.small}>{props.date}</Text>
      </View>
      <View style={styles.receiptItemColumn}>
        <Text style={styles.large}>{props.amount}</Text>
        <Text style={styles.small}>{props.user}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#f5f4f7',
  },
  receiptItem: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 24,
    borderColor: 'rgb(225,225,228)',
    borderBottomWidth: 1,
  },
  large: {
    fontSize: 20,
    marginBottom: 5
  },
  small: {
    fontSize: 12
  }
});