import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

import Hr from '../components/Hr';
import Title from '../components/Title';
import Wrapper from '../components/Wrapper';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'SIGO Móvil',
    headerLeft: null,
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
        <Title>Selecciona una opción</Title>
        <Button
          title="Presidente"
          color="#3a42b8"
          onPress={() => this.props.navigation.navigate('Polling', { nextPage: 'President' })}
        />
        <Hr />
        <Button
          title="Senadores"
          color="#3a42b8"
          onPress={() => this.props.navigation.navigate('Polling', { nextPage: 'Senator' })}
        />
        <Hr />
        <Button
          title="Diputados"
          color="#3a42b8"
          onPress={() => this.props.navigation.navigate('Polling', { nextPage: 'Diputy' })}
        />
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
});

export default HomeScreen;
