import React from 'react';
import { StyleSheet, Button, Text, Alert } from 'react-native';

import Hr from '../components/Hr';
import Title from '../components/Title';
import Wrapper from '../components/Wrapper';
import InputField from '../components/InputField';

class RegisterScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      nombre: '',
      apellido_pat: '',
      apellido_mat: '',
      email: '',
      token: '' 
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
    .then((response) => response.json())
    .then((responseJson) => {
      Alert.alert(
        'Registro exitoso',
        '¡Gracias por registrarte!',
        [
          { text: 'CONTINUAR', onPress: () => this.props.navigation.navigate('Home') },
        ],
        { cancelable: false },
      );
    })
    .catch((error) => {
      console.log(error);
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
        <Text>Si cuentas con un código de tu organización, agrégalo:</Text>
        <InputField 
          label="TOKEN DE ACCESO"
          name="token"
          value={ this.state.token }
          onChangeText={(token) => this.updateInput('token', token)}
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
