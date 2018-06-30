import React from 'react';
import { StyleSheet, Button, Keyboard } from 'react-native';
import moment from 'moment';

import TimePicker from 'react-native-modal-datetime-picker';

import Title from '../components/Title';
import InputField from '../components/InputField';
import Wrapper from '../components/Wrapper';
import Select from '../components/Select';
import Hr from '../components/Hr';

class PollingScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isTimePickerVisible: false,
      acceso: 'bien',
      funcionarios: 'bien',
      materiales: 'bien',
      hora_apertura: '',
      comentario: '',
    };
  }
  
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

  showTimePicker = () => this.setState({ isTimePickerVisible: true });
  
  hideTimePicker = () => this.setState({ isTimePickerVisible: false });

  handleDatePicked = (date) => {
    this.setState({ hora_apertura: date });
    this.hideTimePicker();
  }

  updateInput = (key, value) => {
    this.setState({ [key]: value });
  }

  render() {
    const time = moment(this.state.hora_apertura).format('HH:mm');
    console.log(this.state);
    return (
      <Wrapper>
        <Title>Apertura de casilla</Title>
        <Select
          selectedValue={this.state.acceso}
          label="ACCESO A LA CASILLA"
          options={[
            { label: 'Bien', value: 'bien' },
            { label: 'Regular', value: 'regular' },
            { label: 'Mal', value: 'mal' },
          ]}
          onValueChange={(itemValue) => this.updateInput('acceso', itemValue)}
        />
        <Hr />
        <Select
          selectedValue={this.state.funcionarios}
          label="FUNCIONARIOS COMPLETOS"
          options={[
            { label: 'Bien', value: 'bien' },
            { label: 'Regular', value: 'regular' },
            { label: 'Mal', value: 'mal' },
          ]}
          onValueChange={(itemValue) => this.updateInput('funcionarios', itemValue)}
        />
        <Hr />
        <Select
          selectedValue={this.state.materiales}
          label="MATERIALES COMPLETOS"
          options={[
            { label: 'Bien', value: 'bien' },
            { label: 'Regular', value: 'regular' },
            { label: 'Mal', value: 'mal' },
          ]}
          onValueChange={(itemValue) => this.updateInput('materiales', itemValue)}
        />
        <Hr />
        <InputField
          caretHidden
          label="HORA DE APERTURA"
          value={ time === 'Invalid date' ? '' : time }
          onFocus={() => Keyboard.dismiss()}
          onTouchStart={() => { this.showTimePicker() }}
        />
        <Hr />
        <InputField
          label="DESCRIPCIÓN DE LOS HECHOS" multiline
          value={ this.state.comentario }
          onChangeText={(comentario) => this.updateInput('comentario', comentario)}
        />
        <Hr />
        <Button
          title="ENVIAR REPORTE"
          color="#3a42b8"
          onPress={() => this.props.navigation.navigate('Journey')}
        />
        <TimePicker
          mode="time"
          isVisible={this.state.isTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideTimePicker}
        />
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
});

export default PollingScreen;
