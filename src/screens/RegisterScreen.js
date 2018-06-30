import React from 'react';
import { StyleSheet, Button, Text } from 'react-native';


import Hr from '../components/Hr';
import Title from '../components/Title';
import Wrapper from '../components/Wrapper';
import InputField from '../components/InputField';
require("json-circular-stringify");


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

  
  createUser = () => {
    
    const dataUser = {
      data: {
          nombre: this.state.nombre,
          apellido_pat: this.state.apellido_pat,
          apellido_mat: this.state.apellido_mat,
          email: this.state.email,
          token: this.state.token  
      }
    };
  
    fetch('https://gzlc6adyw6.execute-api.us-east-2.amazonaws.com/dev/usuario', {
      method: 'post',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(dataUser)
    })
    .then(json)
    .then(function (res) {
      // Show success message
      this.props.navigation.navigate('Home');
      console.log(JSON.parse(res))
    })
    .catch(function (error) {
      console.log(error)
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
          onChangeText={(nombre) => this.setState({nombre})}
        />
        <Hr />
        <InputField 
          label="APELLIDO PATERNO"
          name="apellido_pat"
          value={ this.state.apellido_pat } 
          onChangeText={(apellido_pat) => this.setState({apellido_pat})}
        />
        <Hr />
        <InputField 
          label="APELLIDO MATERNO" 
          name="apellido_mat"
          value={ this.state.apellido_mat }
          onChange={(apellido_mat) => this.setState({apellido_mat})}
        /> 
        <Hr />
        <InputField 
          label="CORREO ELECTRÓNICO"
          name="email"
          value={ this.state.email } 
          onChange={(email) => this.setState({email})}
        />
        <Hr />
        <Text>Si cuentas con un código de tu organización, agrégalo:</Text>
        <InputField 
          label="TOKEN DE ACCESO" 
          name="token"
          value={ this.state.token }
          onChange={(token) => this.setState({token})}
          />

        <Hr />
        <Button
          title="ENVIAR"
          color="#3a42b8"
          onPress={() => this.createUser()}
          //onPress={() => this.props.navigation.navigate('Home')}
        />
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
});

export default RegisterScreen;
