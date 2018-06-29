import React from 'react';
import { StyleSheet, View } from 'react-native';

class Hr extends React.Component {
  render() {
    return <View style={styles.wrapper}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 25,
  },
});

export default Hr;
