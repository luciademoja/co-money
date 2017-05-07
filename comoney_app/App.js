import React from 'react';
import { StyleSheet, Text, View, StatusBar, AlertIOS } from 'react-native';
import Loader from './components/Loader';
import BalanceView from './components/BalanceView';
import ReceiptsView from './components/ReceiptsView';
import AppNavigation from './components/AppNavigation';
import Background from './components/Background';


export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {},
      is_polling: false,
      new_purchase: null,
      modal_is_open: false,
      page: 'start'
    }

    this.fetchCombinedData = this.fetchCombinedData.bind(this);
    this.startPolling = this.startPolling.bind(this);
    this.postPurchase = this.postPurchase.bind(this);
    this.discardPurchase = this.discardPurchase.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  changePage(page) {
    this.setState({page: page});
  }

  componentWillMount() {
    console.log('COMPONENT WILL MOUNT...');
    this.fetchCombinedData();
  }

  componentDidMount() {
    this.startPolling();
  }

  fetchCombinedData() {
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

    if(!this.state.is_polling && !this.state.modal_is_open) {
      this.setState({ is_polling: true });

      return fetch('http://d7d11d0f.ngrok.io/poll', {
        headers: { 'Accept': 'application/json' }
        })
        .then((response) => response.json())
        .then((data) => {
          if (data.purchase.length > 0) {
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
    this.setState({ is_polling: false });
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
        this.setState({modal_is_open: false, new_purchase: null, is_polling: false});
        this.fetchCombinedData();
      })
      .catch((error) => {
        console.log('ERROR:');
        console.error(error);
      });
  }

  discardPurchase() {
    fetch('http://d7d11d0f.ngrok.io/discard_purchase', {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      }
      })
      .then((response) => response.json())
      .then((data) => {
        this.setState({modal_is_open: false, new_purchase: null, is_polling: false});
      })
      .catch((error) => {
        console.log('ERROR:');
        console.error(error);
      });
  }

  renderAlert() {
    if(this.state.new_purchase && this.state.modal_is_open === false){
      this.setState({ modal_is_open: true });
      const shop = this.state.new_purchase[0].name;
      const amount = this.state.new_purchase[0].amount;
      console.log(amount)
      AlertIOS.alert(
       amount,
       shop,
       [
         {text: 'Privat', onPress: () => this.discardPurchase(), style: 'cancel'},
         {text: 'Gemensamt', onPress: () => this.postPurchase()},
       ],
      );
    }
  }

  startPolling() {
    setInterval(() => { this.pollPurchases() }, 1000);
  }

  render() {
    this.renderAlert();
    console.disableYellowBox = true;

    if (this.state.page === 'start'){
      return (
      <Background variant='gradient'>
        <View style={styles.container}>
          <BalanceView data={this.state.data} />
          <AppNavigation onChangePage={ this.changePage } />
        </View>
      </Background>
      );
    } else {
      return (
      <Background variant='gradient'>
        <View style={styles.container}>
          <ReceiptsView data={this.state.data} />
          <AppNavigation variant="grey" onChangePage={ this.changePage } />
        </View>
      </Background>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'space-around',
  }
});
