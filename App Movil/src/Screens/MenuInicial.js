import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Gimnasios from './Gimnasios.js';
import Perfil from './Perfil.js';

const MenuInicial = ({ navigation }) => {
  const [selected, setSelected] = useState('Gimnasios');

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.buttonsContainer}>
          <Text
            style={[
              styles.title,
              selected === 'Gimnasios' && styles.titleSelected,
              styles.leftButton,
            ]}
            onPress={() => setSelected('Gimnasios')}>
            Gimnasios
          </Text>
          <Text
            style={[
              styles.title,
              selected === 'Perfil' && styles.titleSelected,
              styles.rightButton,
            ]}
            onPress={() => setSelected('Perfil')}>
            Perfil
          </Text>
        </View>
      </View>
      <View style={styles.contenidoSeleccinado}>
        {selected === 'Gimnasios' ? (
          <Gimnasios navigation={navigation} />
        ) : (
          <Perfil navigation={navigation} />
        )}
      </View>
    </View>
  );
};

export default MenuInicial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#333333',
  },
  title: {
    color: '#444',
    textTransform: 'capitalize',
    fontSize: 30,
    padding: 12,
    flex: 1,
    backgroundColor: 'lightgray',
    textAlign: 'center',
  },
  titleSelected: {
    color: 'white',
    textTransform: 'capitalize',
    fontSize: 30,
    backgroundColor: '#0f9fff',
    padding: 12,
    flex: 1,
    textAlign: 'center',
  },
  titleContainer: {
    padding: 8,
    marginTop: 40,
  },
  contenidoSeleccinado: {
    flex: 1,
    width: '100%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  leftButton: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  rightButton: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});
