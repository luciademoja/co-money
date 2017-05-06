import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import Background from './Background';


export default class ReceiptsView extends React.Component {
  render() {
    return (
      <Background>
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
      <Text style={styles.receiptItemColumn}>
        <Text>{props.store}</Text>
        <Text>{props.date}</Text>
      </Text>
      <Text style={styles.receiptItemColumn}>
        <Text>{props.amount}</Text>
        <Text>{props.user}</Text>
      </Text>
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
    padding: 35,
    borderColor: 'rgb(225,225,228)',
    borderBottomWidth: 1,
  },
  receiptItemColumn: {
    backgroundColor: 'red'
  }
});