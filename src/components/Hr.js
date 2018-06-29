import React from 'react';
import { StyleSheet, View } from 'react-native';

class Hr extends React.Component {
  render() {
    return <View style={styles.hr} />;
  }
}

const styles = StyleSheet.create({
  hr: {
    height: 20,
  },
});

export default Hr;
