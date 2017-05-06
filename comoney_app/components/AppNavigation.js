import React from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, AlertIOS } from 'react-native';

export default class AppNavigation extends React.Component {
  render() {
    if(this.props.variant === 'grey') {
        return(
            <View style={styles.container}>
              <NavigationButton 
                variant='grey'
                image={require('../images/tab_bar/grey/receipt/receipt@2x.png')}
                text='Kvitton'
                onPress={ojsan}
              />
              <NavigationButton 
                variant='grey'
                image={require('../images/tab_bar/grey/heart/heart@2x.png')}
                text='Översikt'
                onPress={ojsan}
              />
              <NavigationButton 
                variant='grey'
                image={require('../images/tab_bar/grey/invoice/invoice@2x.png')}
                text='Fakturor'
                onPress={ojsan}
              />
            </View>
        )
    } else {
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
                <Text style={this.props.variant === 'grey' ? styles.texttextDark : styles.text}>{this.props.text}</Text>
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
  },
  textDark: {
    backgroundColor: 'transparent',
    color: 'grey'
  }
});