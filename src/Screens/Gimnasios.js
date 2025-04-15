import { View, StyleSheet, ScrollView } from 'react-native';
import { useContext } from 'react';
import Gimnasio from '../Components/GimnasioCard.js';
import { ScreenContext } from './ScreenContext.js';

const Clases = ({ navigation }) => {
  const { setInfo } = useContext(ScreenContext);

  const pasarInformacionHijo = (info) => {
    setInfo(info);
    navigation.navigate('MenuGimnasio');
  };

  return (
    <View style={styles.container}>

      <ScrollView style={styles.clasesContainer}>
        <Gimnasio
          nombre="Piscina Cubierta Silla"
          localidad="Valencia"
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
