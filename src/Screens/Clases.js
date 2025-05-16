import { View, StyleSheet, ScrollView } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import Actividad from '../Components/ActividadCard.js';
import { ScreenContext } from './ScreenContext';

const Clases = ({ navigation }) => {
  const { info } = useContext(ScreenContext);
  const [actividades, setActividades] = useState([]);

  const pasarInformacionHijo = (infoActividad) => {
    navigation.navigate('Clase', { data: infoActividad });
  };

  useEffect(() => {
    const fetchActividades = async () => {
      try {
        const response = await fetch('https://api-nodejs-mysql-production-9366.up.railway.app/classes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ gym_id: info?.id }),
        });

        const data = await response.json();
        setActividades(data);
      } catch (error) {
        console.error('Error al cargar actividades:', error);
      }
    };

    if (info?.id) {
      fetchActividades();
    }
  }, [info]);

  return ( 
    <View style={styles.container}>
      <ScrollView style={styles.clasesContainer}>
        {actividades.map((actividad) => (
          <Actividad
            key={actividad.id}
            id={actividad.id}
            actividad={actividad.name}
            monitor={actividad.instructor}
            max={actividad.capacity}
            ocupadas={actividad.users}
            icono="dumbbell"
            imagen={actividad.photo}
            horaInicio={actividad.start_time}
            horaFinal={actividad.finish_time}
            retornacion={pasarInformacionHijo}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Clases;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#333333',
  },
  clasesContainer: {
    borderRadius: 10,
    marginHorizontal: 10,
    gap: 10,
  },
});
