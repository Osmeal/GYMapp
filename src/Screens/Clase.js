import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useState, useEffect, useContext } from 'react';
import { ScreenContext } from './ScreenContext.js';

const Clase = ({ navigation }) => {
  const { info } = useContext(ScreenContext);

  const [reservado, setReservado] = useState(false);
  const [color, setColor] = useState('green');
  const [txt, setTxt] = useState('Reservar');

  const reservar = () => {
    setReservado(!reservado);
  };

  useEffect(() => {
    if (reservado) {
      setColor('red');
      setTxt('Cancelar reserva');
      console.log('Clase reservada con éxito');
    } else {
      setColor('green');
      setTxt('Reservar');
    }
  }, [reservado]);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <IconButton
          icon="arrow-left"
          color="white"
          onPress={() => navigation.navigate('MenuGimnasio')}
          style={{ margin: 0 }}
        />
        <View>
          <Text style={styles.title}>{info.actividad}</Text>
        </View>
      </View>

      <View style={styles.claseContainer}>
        <Text style={styles.infoTxt}>
          Clase de {info.actividad} empieza a las 12:00 y termina a las 13:00
        </Text>
        <Image
          source={{
            uri: info.imagen,
          }}
          style={styles.foto}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.cantidadTxt}>Monitor: {info.monitor}</Text>
          <Text style={styles.cantidadTxt}>
            Participantes: {info.ocupadas}/{info.max}
          </Text>
        </View>
      </View>

      <View style={styles.botonContainer}>
        <TouchableOpacity
          onPress={reservar}
          style={[styles.boton, { backgroundColor: color }]}>
          <Text style={styles.botonTexto}>{txt}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Clase;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#333333',
    padding: 8,
  },
  title: {
    color: 'white',
    textTransform: 'capitalize',
    fontSize: 30,
    textShadowColor: '#0f9fff',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
    textAlign: 'center',
    margin: 0,
  },
  titleContainer: {
    margin: 0,
    marginTop: 15,
  },
  claseContainer: {
    flex: 1,
    marginTop: 20,
  },
  cantidadTxt: {
    color: 'white',
    fontSize: 22,
  },
  infoTxt: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    margin: 8,
  },
  infoContainer: {
    flex: 1,
    alignContent: 'flex-start',
    margin: 8,
  },
  foto: {
    width: '100%',
    height: '60%',
    borderRadius: 10,
  },
  botonContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  boton: {
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 35,
    alignItems: 'center',
  },
  botonTexto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
