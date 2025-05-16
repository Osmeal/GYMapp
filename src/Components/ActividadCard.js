import { StyleSheet } from 'react-native';
import { Avatar, Card } from 'react-native-paper';

const Actividad = ({
  id,
  actividad,
  monitor,
  max,
  ocupadas,
  icono,
  retornacion,
  imagen,
  horaInicio,
  horaFinal,
}) => {
  const infoActividad = {
    id,
    actividad,
    monitor,
    max,
    ocupadas,
    imagen: imagen,
    horaInicio,
    horaFinal,
  };

  return (
    <Card style={styles.card} onPress={() => retornacion(infoActividad)}>
      <Card.Title
        title={actividad}
        subtitle={`${ocupadas}/${max} \t ${monitor}`}
        left={(props) => (
          <Avatar.Icon {...props} icon={icono} style={styles.card} />
        )}
      />
      <Card.Cover source={{ uri: infoActividad.imagen }} />
    </Card>
  );
};

export default Actividad;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#0f9fff',
    borderRadius: 10,
    marginBottom: 10,
  },
});
