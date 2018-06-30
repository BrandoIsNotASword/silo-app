import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

import Title from '../components/Title';
import InputField from '../components/InputField';
import Wrapper from '../components/Wrapper';
import Select from '../components/Select';
import Hr from '../components/Hr';

class PollingScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cvevent: '01',
      cvedist: '',
      cvesecc: '',
      cvetipo: 'BA',
      numcasilla: '' ,
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

  render() {
    const nextPage = this.props.navigation.getParam('nextPage');

    return (
      <Wrapper> 
        <Title>Descripción de casilla</Title>
        <Select
          selectedValue={this.state.cvevent}
          label="TIPO DE IRREGULARIDAD"
          options={[
            { value: '01', label:	'AGUASCALIENTES' },
            { value: '02', label:	'BAJA CALIFORNIA' },
            { value: '03', label:	'BAJA CALIFORNIA SUR' },
            { value: '04', label:	'CAMPECHE' },
            { value: '05', label:	'COAHUILA' },
            { value: '06', label:	'COLIMA' },
            { value: '07', label:	'CHIAPAS' },
            { value: '08', label:	'CHIHUAHUA' },
            { value: '09', label:	'DISTRITO FEDERAL' },
            { value: '10', label:	'DURANGO' },
            { value: '11', label:	'GUANAJUATO' },
            { value: '12', label:	'GUERRERO' },
            { value: '13', label:	'HIDALGO' },
            { value: '14', label:	'JALISCO' },
            { value: '15', label:	'MEXICO' },
            { value: '16', label:	'MICHOACAN' },
            { value: '17', label:	'MORELOS' },
            { value: '18', label:	'NAYARIT' },
            { value: '19', label:	'NUEVO LEON' },
            { value: '20', label:	'OAXACA' },
            { value: '21', label:	'PUEBLA' },
            { value: '22', label:	'QUERETARO' },
            { value: '23', label:	'QUINTANA ROO' },
            { value: '24', label:	'SAN LUIS POTOSI' },
            { value: '25', label:	'SINALOA' },
            { value: '26', label:	'SONORA' },
            { value: '27', label:	'TABASCO' },
            { value: '28', label:	'TAMAULIPAS' },
            { value: '29', label:	'TLAXCALA' },
            { value: '30', label:	'VERACRUZ' },
            { value: '31', label:	'YUCATAN' },
            { value: '32', label:	'ZACATECAS' },
          ]}
          onValueChange={(itemValue) => this.updateInput('cvevent', itemValue)}
        />
        <Hr />
        <InputField
          label="DISTRITO ELECTORAL"
          name="cvedist"
          keyboardType="phone-pad"
          value={this.state.cvedist}
          onChangeText={(cvedist) => this.updateInput('cvedist', cvedist)}
        />
        <Hr />
        <InputField
          label="SECCIÓN ELECTORAL"
          name="cvesecc"
          keyboardType="phone-pad"
          value={this.state.cvesecc}
          onChangeText={(cvesecc) => this.updateInput('cvesecc', cvesecc)}
        />
        <Hr />
        <Select
          selectedValue={this.state.cvetipo}
          label="TIPO DE CASILLA"
          options={[
            { label: 'BASICA', value: 'BA' },
            { label: 'CONTIGUA', value: 'CO' },
            { label: 'EXTRAORDINARIA', value: 'EX' },
            { label: 'EXTR. CONTIGUA', value: 'EC' },
            { label: 'ESPECIAL', value: 'ES' },
          ]}
          onValueChange={(itemValue) => this.updateInput('cvetipo', itemValue)}
        />
        {this.state.cvetipo !== 'BA' && <View>
          <Hr />
          <InputField
            label="NÚMERO DE CASILLA"
            name="numcasilla"
            keyboardType="phone-pad"
            value={this.state.numcasilla}
            onChangeText={(numcasilla) => this.updateInput('numcasilla', numcasilla)}
          />
        </View>}
        <Hr />
        <Button
          title="Continuar"
          color="#3a42b8"
          onPress={() => this.props.navigation.navigate(nextPage, { polling: this.state })}
        />
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
});

export default PollingScreen;
