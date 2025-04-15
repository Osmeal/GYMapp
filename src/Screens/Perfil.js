import { useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { TextInput, Button, Dialog, Portal } from 'react-native-paper';

const Perfil = ({ navigation }) => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <ScrollView style={styles.container}>
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
      </View>

      <View style={styles.buttonContainer}>
        <Button
          style={styles.boton}
          mode="contained"
          color="#0f9fff"
          onPress={() => showDialog()}>
          Guardar Cambios
        </Button>

        <Button
          style={styles.boton}
          mode="contained"
          color="#0f9fff"
          onPress={() => navigation.navigate('LogIn')}>
          Cerrar Sesion
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

export default Perfil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: '30%',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    margin: 8,
    borderRadius: 10,
  },
  boton: {
    marginTop: 20,
    marginHorizontal: 10
  },
  inputsContainer: {
    justifyContent: 'center',
    marginVertical: '20%',
    flex: 1,
    margin: 8,
  },
  input: {
    marginVertical: 18,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});
