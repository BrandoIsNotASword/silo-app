import React from 'react';
import { StyleSheet, Button, Alert } from 'react-native';

import Hr from '../components/Hr';
import Title from '../components/Title';
import Wrapper from '../components/Wrapper';
import InputField from '../components/InputField';
import Select from '../components/Select';

class RegisterScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      nombre: '',
      apellido_pat: '',
      apellido_mat: '',
      email: '',
      token: '5873',
    }
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

  updateInput = (key, value) => {
    this.setState({ [key]: value });
  }

  createUser = () => {
    const dataUser = {
      data: {
        nombre: this.state.nombre,
        apellido_pat: this.state.apellido_pat,
        apellido_mat: this.state.apellido_mat,
        email: this.state.email,
        token: this.state.token,
      }
    };
  
    fetch('https://gzlc6adyw6.execute-api.us-east-2.amazonaws.com/dev/usuario', {
      method: 'post',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(dataUser)
    })
    .then((response) => {
      if (response.ok) return Promise.resolve(response.json());
      return Promise.reject(new Error(response.statusText));
    })
    .then((responseJson) => {
      Alert.alert(
        'Registro exitoso',
        '¡Gracias por registrarte!',
        [
          { text: 'CONTINUAR', onPress: () => this.props.navigation.navigate('Home', { userid: responseJson.userid }) },
        ],
        { cancelable: false },
      );
    })
    .catch((error) => {
      Alert.alert(
        'Ha ocurrido un error',
        'Verifica los datos e inténtalo de nuevo',
        [
          { text: 'OK' },
        ],
        { cancelable: true },
      );
    });
  };

  render() {
    return (
      <Wrapper>
        <Title>Registro en el sistema</Title>
        <InputField 
          label="NOMBRE" 
          name="nombre"
          value={ this.state.nombre }
          onChangeText={(nombre) => this.updateInput('nombre', nombre)}
        />
        <Hr />
        <InputField 
          label="APELLIDO PATERNO"
          name="apellido_pat"
          value={ this.state.apellido_pat }
          onChangeText={(apellido_pat) => this.updateInput('apellido_pat', apellido_pat)}
        />
        <Hr />
        <InputField 
          label="APELLIDO MATERNO" 
          name="apellido_mat"
          value={ this.state.apellido_mat }
          onChangeText={(apellido_mat) => this.updateInput('apellido_mat', apellido_mat)}
        /> 
        <Hr />
        <InputField 
          label="CORREO ELECTRÓNICO"
          name="email"
          keyboardType="email-address"
          value={ this.state.email }
          onChangeText={(email) => this.updateInput('email', email)}
        />
        <Hr />
        <Select
          selectedValue={this.state.token}
          label="SELECCIONA TU ORGANIZACIÓN"
          options={[
            { value: '5873', label: 'UFIC - Rocío Miranda' },
            { value: '8413', label: 'Agrónomos Democráticos - Héctor René Becerril' },
            { value: '5485', label: 'CIOAC - JDLD	José Dolores López' },
            { value: '4608', label: 'ANEC - Enrique Pérez' },
            { value: '3389', label: 'CNPA - Héctor Yescas Torres' },
            { value: '1784', label: 'COCYP - Gerónimo Jacobo Femat' },
            { value: '0082', label: 'Chapingo - Nayeli Martínez Hernández' },
          ]}
          onValueChange={(itemValue) => this.updateInput('token', itemValue)}
        />
        <Hr />
        <Button
          title="ENVIAR"
          color="#3a42b8"
          onPress={() => this.createUser()}
        />
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
});

export default RegisterScreen;
