import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const CrearCuenta = ({ navigation }) => {
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
        />

        <TextInput
          style={styles.input}
          label="Confirm Password"
          underlineColor="yellow"
          outlineColor="yellow"
          activeOutlineColor="yellow"
          mode="flat"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          buttonColor="yellow"
          rippleColor="yellow"
          onPress={() => navigation.navigate('LogIn')}>
          Crear cuenta
        </Button>
        <Button mode="outlined" onPress={() => navigation.navigate('LogIn')}>
          Iniciar sesion
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
    marginTop: '30%',
    justifyContent: 'space-evenly',
  },
});
