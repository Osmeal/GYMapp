import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import Clases from './Clases.js';
import Horario from './Horario.js';
import SegmentedControlTab from 'react-native-segmented-control-tab';

const MenuGimnasio = ({ navigation }) => {
  const [selected, setSelected] = React.useState('Clases');

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <IconButton
          icon="arrow-left"
          color="white"
          onPress={() => navigation.navigate('MenuInicial')}
        />

        <View style={styles.buttonsContainer}>
          <Text
            style={[
              styles.title,
              selected == 'Clases' && styles.titleSelected,
              styles.leftButton,
            ]}
            onPress={() => setSelected('Clases')}>
            Clases
          </Text>
          <Text
            style={[
              styles.title,
              selected === 'Horario' && styles.titleSelected,
              styles.rightButton,
            ]}
            onPress={() => setSelected('Horario')}>
            Horario
          </Text>
        </View>
      </View>

      <View style={styles.contenidoSeleccinado}>
        {selected == 'Clases' ? (
          <Clases navigation={navigation} />
        ) : (
          <Horario navigation={navigation} />
        )}
      </View>
    </View>
  );
};

export default MenuGimnasio;

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
    marginTop: 15,
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
