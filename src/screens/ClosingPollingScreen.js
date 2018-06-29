import React from 'react';
import { StyleSheet, Button, Keyboard } from 'react-native';

import TimePicker from 'react-native-modal-datetime-picker';

import Title from '../components/Title';
import InputField from '../components/InputField';
import Wrapper from '../components/Wrapper';
import Select from '../components/Select';
import Hr from '../components/Hr';

class PollingScreen extends React.Component {
  state = {
    isDateTimePickerVisible: false,
  };

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

  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
  
  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  handleDatePicked = (date) => {
    this.hideDateTimePicker();
  }

  render() {
    const nextPage = this.props.navigation.getParam('nextPage');
    return (
      <Wrapper> 
        <Title>Cierre de casilla</Title>
        <Select
          label="PAQUETE ELECTORAL AL INE"
          options={[
            { label: 'Sí', value: 'si' },
            { label: 'No', value: 'no' },
          ]}
        />
        <Hr />
        <Select
          label="SÁBANA DE RESULTADOS DESPLEGADO AFUERA"
          options={[
            { label: 'Sí', value: 'si' },
            { label: 'No', value: 'no' },
          ]}
        />
        <Hr />
        <InputField
          caretHidden
          label="HORA DE CIERRE"
          onFocus={() => Keyboard.dismiss()}
          onTouchStart={() => { this.showDateTimePicker() }}
        />
        <Hr />
        <InputField label="COMENTARIOS Y/O INCIDENTES" multiline />
        <Hr />
        <Button
          title="Continuar"
          color="#3a42b8"
          onPress={() => this.props.navigation.navigate('Journey')}
        />
        <TimePicker
          mode="time"
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
        />
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
});

export default PollingScreen;
