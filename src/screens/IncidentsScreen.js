import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

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

  state = {
    initialPosition: { 'coords': {
      'longitude': 'unknown',
      'latitude': 'unknown'
    }},

    lastPosition: { 'coords': {
      'longitude': 'unknown',
      'latitude': 'unknown'
    }},
    watchID: 0
  }
  

  getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
         const initialPosition = JSON.stringify(position);
         this.setState({ initialPosition });
      },
      (error) => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    this.state.watchID = navigator.geolocation.watchPosition((position) => {
        const lastPosition = JSON.stringify(position);
        this.setState({ lastPosition });
    });
  };

  componentWillUnmount = () => { 
    if ( this.state.watchID ) {
      navigator.geolocation.clearWatch(this.state.watchID); 
    }
    
  }

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
        <View>
          <Button
            title="AGREGAR COORDENADAS"
            color="#3a42b8"
            onPress={() => { this.getCurrentPosition() } }
          />
          <View style={{ marginTop: 15 }}>
            <Text>LATITUD: {this.state.lastPosition.coords.latitude}</Text>
            <Text>LONGITUD: {this.state.lastPosition.coords.longitude}</Text>
          </View>
        </View>
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
