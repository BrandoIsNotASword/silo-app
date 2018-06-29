import React from 'react';
import { StyleSheet, Button, Text } from 'react-native';

import Hr from '../components/Hr';
import Title from '../components/Title';
import Wrapper from '../components/Wrapper';

class JourneyScreen extends React.Component {
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
        <Title>Jornada electoral</Title>
        <Button
          title="APERTURA DE CASILLA"
          color="#3a42b8"
          onPress={() => this.props.navigation.navigate('Polling', { nextPage: 'OpenPolling' })}
        />
        <Hr />
        <Button
          title="CIERRE DE CASILLA"
          color="#3a42b8"
          onPress={() => this.props.navigation.navigate('Polling', { nextPage: 'ClosePolling' })}
        />
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
});

export default JourneyScreen;
