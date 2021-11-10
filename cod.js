import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from'react-native';
import Slider from '@react-native-community/slider';

let charset=
'abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*';

export default function App() {
  const [password, setPassword] = useState('');
  const [size, setSize] = useState(5);

  function generatePass() {
    let pass = '';
    for (let i = 0, n = charset.length; i < size; i++) {
      pass += charset.charAt(Math.floor(Math.random() * n));
      setPassword(pass);
    }
  }

return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />

      <Text style={styles.title}>{size} Caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor="#B22222"
          maximumTrackTintColor="000"
          value={size}
          onValueChange={(valor) => setSize(valor.toFixed(0))}
        />

        <TouchableOpacity style={styles.button} onPress={generatePass}>
          <Text style={styles.buttonText}>GERAR SENHA </Text>
        </TouchableOpacity>

        {password !== '' && (
          <View style={styles.area}>
            <Text style={styles.password}>{password} </Text>
          </View>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#800000', //fundo
  },

  logo: {
    marginBottom: 60,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  area: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#8B0000',
    width: '80%',
    borderRadius: 7,
  },

  button: {
    backgroundColor: '#B22222',
    width: '79%',
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 29,
  },

  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },

  password: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
  },
});
