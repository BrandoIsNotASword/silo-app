import React from 'react';
import { StyleSheet, View, Text, Picker } from 'react-native';

class InputField extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.text}>{this.props.label}</Text>
        <Picker style={styles.picker} mode="dropdown">
          {this.props.options.map((option, index) => <Picker.Item key={index} {...option} />)}
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#3a42b8',
  },
  picker: {
    height: 50,
  },
  wrapper: {
    borderBottomWidth: 1,
    borderBottomColor: '#3a42b8',
  },
});

export default InputField;
