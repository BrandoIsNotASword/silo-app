import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

class InputField extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>{this.props.label}</Text>
        <TextInput {...this.props} underlineColorAndroid="#3a42b8" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "#3a42b8",
  }
});

export default InputField;
