import React from 'react';
import { StyleSheet, Text } from 'react-native';

class Hr extends React.Component {
  render() {
    return <Text style={styles.title}>{this.props.children}</Text>;
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    marginBottom: 15,
  },
});

export default Hr;
