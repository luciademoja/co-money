import React from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, AlertIOS } from 'react-native';

export default class AppNavigation extends React.Component {
  render() {
    return(
        <View style={styles.container}>
          <NavigationButton 
            image={require('../images/tab_bar/white/receipt/receipt@2x.png')}
            text='Kvitton'
            onPress={ojsan}
          />
          <NavigationButton 
            image={require('../images/tab_bar/white/heart/heart@2x.png')}
            text='Översikt'
            onPress={ojsan}
          />
          <NavigationButton 
            image={require('../images/tab_bar/white/invoice/invoice@2x.png')}
            text='Fakturor'
            onPress={ojsan}
          />
        </View>
    )
  }
}

const ojsan = () => {
  AlertIOS.alert(
   'Sync Complete',
   'All your data are belong to us.'
  );
}

class NavigationButton extends React.Component {
  render() {
    return(
        <TouchableHighlight underlayColor={'transparent'} onPress={ () => { this.props.onPress() }}>
            <View style={styles.item}>
                <Image
                    style={styles.icon}
                    source={this.props.image}
                />
                <Text style={styles.text}>{this.props.text}</Text>
            </View>
        </TouchableHighlight>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  touch: {
    backgroundColor: 'transparent'
  },
  item: {
    alignItems: 'center',
    width: 80
  },
  icon: {
    marginBottom: 5
  },
  text: {
    backgroundColor: 'transparent',
    color: 'white'
  }
});