import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class Knappis extends React.Component {
  render() {
    return (
        <TouchableHighlight underlayColor={'transparent'} onPress={ () => { this.props.onPress() }}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{ this.props.text }</Text>
            </View>
        </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: 15,
    width: 180
  },
  buttonText: {
    textAlign: 'center',
    color: 'rgb(252, 31, 78)'
  }
});

export default Knappis;