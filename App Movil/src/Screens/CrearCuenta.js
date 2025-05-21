import { View, StyleSheet, Image, ScrollView, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useState } from 'react';

const CrearCuenta = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleCrearCuenta = async () => {
    if (name.trim() === '') {
      setError('El nombre no puede estar vacío');
      return;
    }

    if (!email.includes('@')) {
      setError('El email debe contener un @');
      return;
    }

    if (password.trim() === '') {
      setError('La contraseña no puede estar vacía');
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    setError('');

    try {
      const response = await fetch(
        'https://api-nodejs-mysql-production-9366.up.railway.app/users',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        navigation.navigate('LogIn');
      } else {
        setError(data.message || 'Error al crear la cuenta');
      }
    } catch (err) {
      setError('Error al conectar con el servidor');
      console.error(err);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../Images/logo.png')} />
      </View>

      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          label="Name"
          mode="flat"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          label="Email"
          mode="flat"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          label="Password"
          mode="flat"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={styles.input}
          label="Confirm Password"
          mode="flat"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>

      <View style={styles.buttonContainer}>
        <Button mode="elevated" onPress={handleCrearCuenta}>
          Crear cuenta
        </Button>
        <Button mode="elevated" onPress={() => navigation.navigate('LogIn')}>
          Iniciar sesión
        </Button>
      </View>
    </ScrollView>
  );
};

export default CrearCuenta;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#0f9fff',
    padding: 8,
  },
  inputsContainer: {
    justifyContent: 'center',
    marginVertical: '20%',
  },
  input: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  logo: {
    alignItems: 'center',
    height: 128,
    width: 200,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: '18%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
});
