import { View, StyleSheet, ScrollView } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import Gimnasio from '../Components/GimnasioCard.js';
import { ScreenContext } from './ScreenContext.js';

const Clases = ({ navigation }) => {
  const { setInfo } = useContext(ScreenContext);
  const [gimnasios, setGimnasios] = useState([]);

  useEffect(() => {
    const fetchGimnasios = async () => {
      try {
        const response = await fetch('https://api-nodejs-mysql-production-9366.up.railway.app/');
        const data = await response.json();
        setGimnasios(data);
      } catch (error) {
        console.error('Error al cargar los gimnasios:', error);
      }
    };

    fetchGimnasios();
  }, []);

  const pasarInformacionHijo = (info) => {
    setInfo(info);
    navigation.navigate('MenuGimnasio');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.clasesContainer}>
        {gimnasios.map((gimnasio) => (
          <Gimnasio
            key={gimnasio.id}
            nombre={gimnasio.name}
            localidad={gimnasio.address}
            telefono={gimnasio.phone}
            foto={gimnasio.photo}
            retornacion={() => pasarInformacionHijo(gimnasio)}
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
