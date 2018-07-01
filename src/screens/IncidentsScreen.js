import React from 'react';
import { StyleSheet, View, Button, Text, Alert } from 'react-native';

import Hr from '../components/Hr';
import Title from '../components/Title';
import Wrapper from '../components/Wrapper';
import Select from '../components/Select';
import InputField from '../components/InputField';

class IncidentsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userid: 1,
      tipo: '', 
      descripcion: '', 
      latitude: null,
      longitude: null,
      errorPosition: null,
    };
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
  
  updateInput = (key, value) => {
    this.setState({ [key]: value });
  }

  createIncident = () => {
    const dataIncident = {
      data: {
        userid: 1,
        tipo: this.state.tipo, 
        lat: this.state.latitude,
        lon: this.state.longitude,  
        descripcion: this.state.descripcion,   
      }
    };

    console.log(JSON.stringify(dataIncident));
  
    fetch('https://gzlc6adyw6.execute-api.us-east-2.amazonaws.com/dev/incidente', {
      method: 'post',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(dataIncident)
    })
    .then((response) => response.json())
    .then((responseJson) => {
      Alert.alert(    
        'Incidente creado Satisfactoriamente.',
        '¡Gracias por su participación!',
        [
          { text: 'CONTINUAR', onPress: () => this.props.navigation.navigate('Home') },
        ],
        { cancelable: false },
      );
    })
    .catch((error) => {
      console.log(error);
    });
  }

  getCurrentPosition = () => {
    console.log('Entró!');
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(JSON.stringify(position));
        this.updateInput('latitude', position.coords.latitude);
        this.updateInput('longitude', position.coords.longitude);
      },
      (error) =>  console.log(JSON.stringify(error)),
      //this.updateInput('errorPosition', error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }


  render() {
    return (
      <Wrapper>
        <Title>Reportar incidentes</Title>
        <Select
          label="TIPO DE IRREGULARIDAD"
          selectedValue={this.state.tipo}   
          options={[
            { label: 'Selecciona un tipo.', value: '0' },
            { label: 'Reparto de despensas, dádivas o material de parte del gobierno o partidos políticos', value: '1' },
            { label: 'Servidores públicos participan u organizan actos partidistas', value: '2' },
            { label: 'Recoger una o más credenciales para votar', value: '3' },
            { label: 'Solicitar votos por pago, promesa de dinero u otra contraprestación', value: '4' },
            { label: 'Amenazar con suspender los beneficios de los programas sociales', value: '5' },
            { label: 'Organizar la reunión o el transporte de votantes el día de la jornada electoral', value: '6' },
            { label: 'Solicitar u ordenar evidencia del sentido del voto', value: '7' },
            { label: 'Solicitar u ordenar evidencia del sentido del voto', value: '8' },
            { label: 'Aportaciones anónimas, en dinero o especie a candidatos, partidos o campañas políticas', value: '9' },
            { label: 'Otro tipo de irregularidad', value: '10' }
          ]}
          onValueChange={(itemValue) => this.updateInput('tipo', itemValue)}
        />
        <Hr />
        <InputField 
          label="DESCRIPCIÓN DE LOS HECHOS" 
          multiline 
          value={ this.state.descripcion }
          onChangeText={(descripcion) => this.updateInput('descripcion', descripcion)}/>
        <Hr />
        <View>
          <Button
            title="AGREGAR COORDENADAS"
            color="#3a42b8"
            onPress={() => this.getCurrentPosition() }
          />
          <View style={{ marginTop: 15 }}>
            <Text>LATITUD: {this.state.latitude}</Text>
            <Text>LONGITUD: {this.state.longitude}</Text>
          </View>
        </View>
        <Hr />
        <Button
          title="ENVIAR REPORTE"
          color="#3a42b8"
          onPress={() => this.createIncident()}
        />
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
});

export default IncidentsScreen;
