import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import Background from './Background';


export default class BalanceView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {
        account1: [
          {
            id: 1,
            account_id: 1,
            name: "7 Eleven, Kaffe",
            amount: "789.0",
            combined: true,
            created_at: "2017-05-03T18:37:00.050Z",
            updated_at: "2017-05-03T18:37:00.050Z"
          },
          {
            id: 3,
            account_id: 1,
            name: "ICA Maxi",
            amount: "345.0",
            combined: true,
            created_at: "2017-05-03T18:38:19.742Z",
            updated_at: "2017-05-03T18:38:46.100Z"
          },
          {
            id: 4,
            account_id: 1,
            name: "ICA Maxi",
            amount: "345.0",
            combined: true,
            created_at: "2017-05-03T18:39:48.985Z",
            updated_at: "2017-05-03T18:40:02.797Z"
          }
        ],
        account2: [
          {
            id: 2,
            account_id: 2,
            name: "Pressbyrån, Semla",
            amount: "14.0",
            combined: true,
            created_at: "2017-05-03T18:37:00.053Z",
            updated_at: "2017-05-03T18:37:00.053Z"
          }
        ],
        account1_per: 99.1,
        account2_per: 0.9
      }
    }
  }

  componentWillMount() {
    console.log('COMPONENT WILL MOUNT');

    /*
    return fetch('localhost:3000/combined_data')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('DATA:');
        console.log(data);
      })
      .catch((error) => {
        console.log('ERROR:');
        console.error(error);
      });
      */
  }


  render() {
    if (this.state.data.account1.length > 0) {
      console.log('WE HAVE DATA!');
      return(
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
    } else {
      // RENDER LOADING THINGY
      console.log('NO DATA!');
      return (
        <Background variant='gradient'>
          <View style={styles.container}>
            <Text style={styles.balancePercent}>
              Fetching data...
            </Text>
          </View>
        </Background>
      );
    }
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