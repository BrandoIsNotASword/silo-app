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
      paquetes: true,
      sabanas: true,
      hora_cierre: null,
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
    this.setState({ hora_cierre: date });
    this.hideTimePicker();
  }

  updateInput = (key, value) => {
    this.setState({ [key]: value });
  }

  render() {
    const time = moment(this.state.hora_cierre).format('HH:mm');

    return (
      <Wrapper> 
        <Title>Cierre de casilla</Title>
        <Select
          selectedValue={this.state.paquetes}
          label="PAQUETE ELECTORAL ENTREGADO AL INE"
          options={[
            { label: 'Sí', value: true },
            { label: 'No', value: false },
          ]}
          onValueChange={(itemValue) => this.updateInput('paquetes', itemValue)}
        />
        <Hr />
        <Select
          label="SÁBANA DE RESULTADOS DESPLEGADO AFUERA"
          options={[
            { label: 'Sí', value: true },
            { label: 'No', value: false },
          ]}
          onValueChange={(itemValue) => this.updateInput('sabanas', itemValue)}
        />
        <Hr />
        <InputField
          caretHidden
          value={ time === 'Invalid date' ? '' : time }
          label="HORA DE CIERRE"
          onFocus={() => Keyboard.dismiss()}
          onTouchStart={() => { this.showTimePicker() }}
        />
        <Hr />
        <InputField
          multiline
          value={ this.state.comentario }
          onChangeText={(comentario) => this.updateInput('comentario', comentario)}
          label="COMENTARIOS Y/O INCIDENTES"
        />
        <Hr />
        <Button
          title="Continuar"
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
