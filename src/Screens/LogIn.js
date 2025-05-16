import { useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import { TextInput, Button, Dialog, Portal } from 'react-native-paper';
import { useContext } from 'react';
import { ScreenContext } from './ScreenContext';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);

  const { setUserId } = useContext(ScreenContext);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const handleLogin = async () => {
    try {
      const response = await fetch(
        'https://api-nodejs-mysql-production-9366.up.railway.app/user',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setUserId(data.user.id);
        navigation.navigate('MenuInicial');
      } else {
        Alert.alert('Error', data.error || 'Credenciales incorrectas');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo conectar con el servidor');
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
          label="Email"
          value={email}
          onChangeText={setEmail}
          mode="flat"
        />

        <TextInput
          style={styles.input}
          label="Password"
          value={password}
          onChangeText={setPassword}
          mode="flat"
          secureTextEntry
        />
        <Text style={styles.text} onPress={showDialog}>
          ¿Has olvidado la contraseña?
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button mode="elevated" onPress={handleLogin}>
          Iniciar sesión
        </Button>

        <Button
          mode="elevated"
          onPress={() => navigation.navigate('Crear Cuenta')}>
          Crear cuenta
        </Button>
      </View>

      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Recuperar Contraseña</Dialog.Title>
          <Dialog.Content>
            <Text>
              Para recuperar tu contraseña, por favor revisa tu correo
              electrónico registrado y sigue las instrucciones.
            </Text>
            <TextInput style={styles.input} label="Email" mode="flat" />
          </Dialog.Content>
          <Dialog.Actions
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 16,
            }}>
            <Button onPress={hideDialog}>Enviar</Button>
            <Button onPress={hideDialog}>Cerrar</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </ScrollView>
  );
};

export default Login;

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
    marginVertical: 18,
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
    marginTop: '30%',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: '20%',
    justifyContent: 'space-evenly',
  },
  text: {
    color: 'blue',
  },
});
