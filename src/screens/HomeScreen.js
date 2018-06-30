import React from 'react';
import { StyleSheet, Button, AsyncStorage } from 'react-native';

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

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    AsyncStorage.setItem('userid', this.props.navigation.getParam('userid').toString());
  }

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
          onPress={() => this.props.navigation.navigate('ElectoralResults')}
        />
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
});

export default HomeScreen;
