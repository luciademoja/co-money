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
      data: {}
    }

    this.pollPurchases = this.pollPurchases.bind(this);
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
    // FETCH POLL ENDPOINT, IF DATA['PURCHASE'] -> SHOW MODAL
  }

  render() {
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
