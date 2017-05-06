import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class Knappis extends React.Component {
  render() {
    return (
        <TouchableHighlight style={styles.buttonContainer} underlayColor={'transparent'} onPress={ () => { this.props.onPress() }}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{ this.props.text }</Text>
            </View>
        </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 170,
  },
  button: {
    backgroundColor: 'white',
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: 30
  },
  buttonText: {
    textAlign: 'center',
    color: 'rgb(252, 31, 78)',
    backgroundColor: 'transparent'
  }
});

export default Knappis;