import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

import Hr from '../components/Hr';
import Title from '../components/Title';
import Wrapper from '../components/Wrapper';
import Select from '../components/Select';
import InputField from '../components/InputField';

class IncidentsScreen extends React.Component {
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
        <Title>Reportar incidentes</Title>
        <Select
          label="TIPO DE IRREGULARIDAD"
          options={[
            { label: 'Java', value: 'java' },
            { label: 'Javascript', value: 'js' },
          ]}
        />
        <Hr />
        <InputField label="DESCRIPCIÓN DE LOS HECHOS" multiline />
        <Hr />
        <Button
          title="ENVIAR REPORTE"
          color="#3a42b8"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
});

export default IncidentsScreen;
