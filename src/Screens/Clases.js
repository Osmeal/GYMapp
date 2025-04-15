import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useContext } from 'react';
import Actividad from '../Components/ActividadCard.js';
import { ScreenContext } from './ScreenContext.js';

const Clases = ({ navigation }) => {
  const { setInfo } = useContext(ScreenContext);

  const pasarInformacionHijo = (infoActividad) => {
    setInfo(infoActividad);
    console.log(infoActividad);
    navigation.navigate('Clase');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.clasesContainer}>
        <Actividad
          actividad="Spinning"
          monitor="Jaime"
          max="10"
          ocupadas="7"
          icono="bicycle"
          retornacion={pasarInformacionHijo}
        />
        <Actividad
          actividad="GAP"
          monitor="Fernando"
          max="15"
          ocupadas="9"
          icono="dumbbell"
          retornacion={pasarInformacionHijo}
        />
        <Actividad
          actividad="Zumba"
          monitor="Pedro"
          max="12"
          ocupadas="2"
          icono="walking"
          retornacion={pasarInformacionHijo}
        />
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
