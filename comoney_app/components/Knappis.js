import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class Knappis extends React.Component {
  render() {
    return (
        <TouchableHighlight onPress={ () => { this.props.onPress() }}>
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
    padding: 10,
    borderRadius: 30,
    width: 160
  },
  buttonText: {
    textAlign: 'center',
    color: 'rgb(252, 31, 78)'
  }
});

export default Knappis;