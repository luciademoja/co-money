import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import Background from './Background';


export default class BalanceView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {}
    }
  }

  componentWillMount() {
    console.log('COMPONENT WILL MOUNT...');

    return fetch('http://d7d11d0f.ngrok.io/combined_data', {
      headers: { 'Accept': 'application/json' }
      })
      .then((response) => response.json())
      .then((data) => {
        this.setState({data: data});
      })
      .catch((error) => {
        console.log('ERROR:');
        console.error(error);
      });
  }


  render() {
    var total1 = this.state.data.account1_total;
    var total2 = this.state.data.account2_total;

    var more_or_less = total1 > total2 ? 'mer' : 'mindre';


    if (this.state.data.account1) {
      console.log('WE HAVE DATA!');
      return(
        <Background variant='gradient'>
          <View style={styles.container}>
            <Text style={styles.balancePercent}>
              { this.state.data.account1_per }
            </Text>
            <View style={styles.textContainer}>
              <Text style={styles.heading}>
                Hej Anna!
              </Text>
              <Text style={styles.paragraph}>
                Du har betalat
                { this.state.data.account2_total - this.state.data.account1_total }
                kr { more_or_less } än Johan. Era gemensamma utgifter denna månaden är 11 500 kr.
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