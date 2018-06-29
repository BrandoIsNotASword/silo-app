import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Wrapper from '../components/Wrapper';

class WelcomeScreen extends React.Component {
  static navigationOptions = {
    title: 'SIGO Móvil',
    headerStyle: {
      backgroundColor: '#3a42b8',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <Wrapper> 
        <Text style={styles.title}>¡Bienvenido!</Text>
        <Button
          title="Regístrate"
          color="#3a42b8"
          onPress={() => this.props.navigation.navigate('Register')}
        />
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 56,
    alignSelf: 'center',
    marginBottom: 15,
  }
});

export default WelcomeScreen;
