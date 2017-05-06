import React from 'react';
import { StyleSheet, Text, Image, View, AlertIOS } from 'react-native';
import Background from './Background';
import Knappis from './Knappis';
import Loader from './Loader';

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

    var total = total1 + total2;

    if(total1 > total2) {
      var more_or_less =  'mer';
      var account1_diff = this.state.data.account1_total - this.state.data.account2_total
    } else {
      var more_or_less =  'mindre';
      var account1_diff = this.state.data.account2_total - this.state.data.account1_total
    }

    if (this.state.data.account1) {
      console.log('WE HAVE DATA!');
      return(
        <Background variant='gradient'>
          <View style={styles.container}>
            <Text style={styles.balancePercent}>
              { this.state.data.account1_per + '%' }
            </Text>
            <View style={styles.textContainer}>
              <Text style={styles.heading}>
                Hej Anna!
              </Text>
              <Text style={styles.paragraph}>
                Du har betalat
                { ' ' + account1_diff + ' ' }
                kr
                { ' ' + more_or_less + ' ' }
                än Johan. Era gemensamma utgifter denna månaden är
                { ' ' + total + ' ' }
                kr.
              </Text>
              <Knappis text="SE DETALJER" onPress={ojsan} />
            </View>
          </View>
        </Background>
      );
    } else {
      console.log('NO DATA!');
      return <Loader />;
  }
}
}

const ojsan = () => {
  AlertIOS.alert(
   'Sync Complete',
   'All your data are belong to us.'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
  balancePercent: {
    position: 'absolute',
    top: '15%',
    color: 'rgba(255,255,255,0.15)',
    fontSize: 168,
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
   fontWeight: 'bold',
   marginBottom: 6
  },
  paragraph: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
    maxWidth: 300,
    marginBottom: 10
  }
});