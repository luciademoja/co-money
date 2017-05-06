import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Loader from './components/Loader';
import BalanceView from './components/BalanceView';
import ReceiptsView from './components/ReceiptsView';
import AppNavigation from './components/AppNavigation';


export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {},
      new_purchase: null
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

  pollPurchases() {
    console.log('Polling...');

    return fetch('http://d7d11d0f.ngrok.io/poll', {
      headers: { 'Accept': 'application/json' }
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.purchase) {
          this.setState({new_purchase: data.purchase});
        } else {
          console.log('- No new purchase -');
        }
      })
      .catch((error) => {
        console.log('ERROR:');
        console.error(error);
      });
  }

  postPurchase() {
    fetch('http://d7d11d0f.ngrok.io/add_to_combined_data', {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      }
      })
      .then((response) => response.json())
      .then((data) => {
        this.setState({new_purchase: null});
      })
      .catch((error) => {
        console.log('ERROR:');
        console.error(error);
      });
  }

  renderAlert() {
    if(this.state.new_purchase){
      const shop = this.state.new_purchase.name;
      const amount = this.state.new_purchase.amount;
      AlertIOS.alert(
       amount,
       shop,
       [
         {text: 'Privat', onPress: () => this.setState({new_purchase: null}), style: 'cancel'},
         {text: 'Gemensamt', onPress: () => postPurchase()},
       ],
      );
    }
  }

  render() {
    setInterval(() => { this.pollPurchases() }, 5000);

    return (
      <View style={styles.container}>
        <BalanceView data={this.state.data} />
        <AppNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',
    alignItems: 'center',
    justifyContent: 'space-around',
  }
});
