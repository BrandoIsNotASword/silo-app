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
        <Title>Apertura de casilla</Title>
        <Select
          label="ACCESO A LA CASILLA"
          options={[
            { label: 'Bien', value: 'bien' },
            { label: 'Regular', value: 'regular' },
            { label: 'Mal', value: 'mal' },
          ]}
        />
        <Hr />
        <Select
          label="FUNCIONARIOS COMPLETOS"
          options={[
            { label: 'Bien', value: 'bien' },
            { label: 'Regular', value: 'regular' },
            { label: 'Mal', value: 'mal' },
          ]}
        />
        <Hr />
        <Select
          label="MATERIALES COMPLETOS"
          options={[
            { label: 'Bien', value: 'bien' },
            { label: 'Regular', value: 'regular' },
            { label: 'Mal', value: 'mal' },
          ]}
        />
        <Hr />
        <InputField
          caretHidden
          label="HORA DE APERTURA"
          onFocus={() => Keyboard.dismiss()}
          onTouchStart={() => { this.showDateTimePicker() }}
        />
        <Hr />
        <InputField label="DESCRIPCIÓN DE LOS HECHOS" multiline />
        <Hr />
        <Button
          title="ENVIAR REPORTE"
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
