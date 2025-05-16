import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useState, useEffect, useContext } from 'react';
import { ScreenContext } from './ScreenContext';

const Clase = ({ navigation, route }) => {
  const { data: info } = route.params;
  const { userId } = useContext(ScreenContext);

  const [reservado, setReservado] = useState(false);
  const [color, setColor] = useState('green');
  const [txt, setTxt] = useState('Reservar');

  const [ocupadas, setOcupadas] = useState(info.ocupadas);

  const formatHora = (hora) => hora?.slice(0, 5);

  useEffect(() => {
    const comprobarReserva = async () => {
      try {
        const response = await fetch(
          `https://api-nodejs-mysql-production-9366.up.railway.app/classes/${info.id}/check-user`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_id: userId }),
          }
        );

        const text = await response.text();

        const data = JSON.parse(text);

        if (data.reservado) {
          setReservado(true);
        }
      } catch (error) {
        console.error('Error comprobando reserva:', error);
      }
    };

    comprobarReserva();
  }, []);

  const reservar = async () => {
    try {
      if (!reservado) {
        // RESERVAR clase
        const response = await fetch(
          `https://api-nodejs-mysql-production-9366.up.railway.app/classes/${info.id}/add-user`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_id: userId }),
          }
        );

        const data = await response.json();

        if (response.ok) {
          console.log('Clase reservada:', data);
          setReservado(true);
          setOcupadas((prev) => prev + 1); // 👈 aumenta participantes
        } else {
          console.error('Error al reservar:', data.error);
        }
      } else {
        // CANCELAR reserva
        const response = await fetch(
          `https://api-nodejs-mysql-production-9366.up.railway.app/classes/${info.id}/remove-user`,
          {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_id: userId }),
          }
        );

        const data = await response.json();

        if (response.ok) {
          console.log('Reserva cancelada:', data);
          setReservado(false);
          setOcupadas((prev) => Math.max(prev - 1, 0)); // 👈 reduce participantes sin bajar de 0
        } else {
          console.error('Error al cancelar:', data.error);
        }
      }
    } catch (error) {
      console.error('Error al procesar la acción de reserva:', error);
    }
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
          Clase de {info.actividad} empieza a las {formatHora(info.horaInicio)}{' '}
          y termina a las {formatHora(info.horaFinal)}
        </Text>
        <Image source={{ uri: info.imagen }} style={styles.foto} />
        <View style={styles.infoContainer}>
          <Text style={styles.cantidadTxt}>Monitor: {info.monitor}</Text>
          <Text style={styles.cantidadTxt}>
            Participantes: {ocupadas}/{info.max}
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
    marginBottom: 50,
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
