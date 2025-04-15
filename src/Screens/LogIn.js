import { useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { TextInput, Button, Dialog, Portal } from 'react-native-paper';

const Login = ({ navigation }) => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../Images/logo.png')} />
      </View>

      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          label="Email"
          underlineColor="yellow"
          outlineColor="yellow"
          activeOutlineColor="yellow"
          mode="flat"
        />

        <TextInput
          style={styles.input}
          label="Password"
          underlineColor="yellow"
          outlineColor="yellow"
          activeOutlineColor="yellow"
          mode="flat"
          secureTextEntry
        />
        <Text style={styles.text} onPress={showDialog}>
          ¿Has olvidado la contraseña?
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          buttonColor="Yellow"
          rippleColor="yellow"
          onPress={() => navigation.navigate('Crear Cuenta')}>
          Crear cuenta
        </Button>
        <Button
          mode="outlined"
          onPress={() => navigation.navigate('MenuInicial')}>
          Iniciar sesión
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
            <TextInput
              style={styles.input}
              label="Email"
              underlineColor="yellow"
              outlineColor="yellow"
              activeOutlineColor="yellow"
              mode="flat"
            />
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
    marginTop: '30%',
    justifyContent: 'space-evenly',
  },
  text: {
    color: 'blue',
  },
});
