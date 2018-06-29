import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

import Hr from '../components/Hr';
import Title from '../components/Title';
import Wrapper from '../components/Wrapper';

class HomeScreen extends React.Component {
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
        <Title>Selecciona una opción</Title>
        <Button
          title="Reportar incidentes"
          color="#3a42b8"
          onPress={() => this.props.navigation.navigate('Incidents')}
        />
        <Hr />
        <Button
          title="Jornada electoral"
          color="#3a42b8"
          onPress={() => this.props.navigation.navigate('Journey')}
        />
        <Hr />
        <Button
          title="Resultados electorales"
          color="#3a42b8"
          onPress={() => this.props.navigation.navigate('Welcome')}
        />
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
});

export default HomeScreen;
