import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Title from '../components/Title';
import InputField from '../components/InputField';
import Wrapper from '../components/Wrapper';
import Select from '../components/Select';
import Hr from '../components/Hr';

class PollingScreen extends React.Component {
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
    const nextPage = this.props.navigation.getParam('nextPage');
    return (
      <Wrapper> 
        <Title>Cierre de casilla</Title>
        <Select
          label="TIPO DE IRREGULARIDAD"
          options={[
            { label: 'Aguascaliente', value: 'aguascaliente' },
            { label: 'Quintana Roo', value: 'quintana-roo' },
          ]}
        />
        <Hr />
        <InputField label="DISTRITO ELECTORAL" />
        <Hr />
        <InputField label="SECCIÓN ELECTORAL" />
        <Hr />
        <Select
          label="TIPO DE CASILLA"
          options={[
            { label: 'Básica', value: 'basica' },
            { label: 'Contigua', value: 'contigua' },
            { label: 'Extraordinaria', value: 'extraordinaria' },
            { label: 'Especial', value: 'especial' },
          ]}
        />
        <Hr />
        <InputField label="NÚMERO DE CASILLA" />
        <Hr />
        <Button
          title="Continuar"
          color="#3a42b8"
          onPress={() => this.props.navigation.navigate(nextPage)}
        />
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
});

export default PollingScreen;
