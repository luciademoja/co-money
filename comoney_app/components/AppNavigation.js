import React from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, AlertIOS } from 'react-native';

export default class AppNavigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.variant === 'grey') {
        return(
            <View style={styles.container}>
              <NavigationButton 
                variant='grey'
                image={require('../images/tab_bar/grey/receipt/receipt@2x.png')}
                text='Kvitton'
                page="kvitton"
                changePage={this.props.onChangePage}
              />
              <NavigationButton 
                variant='grey'
                image={require('../images/tab_bar/grey/heart/heart@2x.png')}
                text='Översikt'
                page="start"
                changePage={this.props.onChangePage}
              />
              <NavigationButton 
                variant='grey'
                image={require('../images/tab_bar/grey/invoice/invoice@2x.png')}
                text='Fakturor'
                page="start"
                changePage={this.props.onChangePage}
              />
            </View>
        )
    } else {
      return(
          <View style={styles.container}>
            <NavigationButton 
              image={require('../images/tab_bar/white/receipt/receipt@2x.png')}
              text='Kvitton'
              page="kvitton"
              changePage={this.props.onChangePage}
            />
            <NavigationButton 
              image={require('../images/tab_bar/white/heart/heart@2x.png')}
              text='Översikt'
              page="start"
              changePage={this.props.onChangePage}
            />
            <NavigationButton 
              image={require('../images/tab_bar/white/invoice/invoice@2x.png')}
              text='Fakturor'
              page="start"
              changePage={this.props.onChangePage}
            />
          </View>
      )
    }
  }
}

class NavigationButton extends React.Component {
  render() {
    return(
        <TouchableHighlight underlayColor={'transparent'} onPress={ () => { this.props.changePage(this.props.page) }}>
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