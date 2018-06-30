import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

class Hr extends React.Component {
  render() {
    return <ScrollView style={styles.wrapper}>{this.props.children}</ScrollView>;
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 25,
  },
});

export default Hr;
