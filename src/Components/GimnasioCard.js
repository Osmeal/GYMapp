import { StyleSheet } from 'react-native';
import { Avatar, Card, Text } from 'react-native-paper';

const Gimnasio = ({ nombre, localidad, telefono, foto, retornacion }) => {
  const imagen = foto;

  const sendDataToParent = () => {
    const data = [nombre, localidad, telefono];
    retornacion(data);
  };

  return (
    <Card style={styles.card} onPress={sendDataToParent}>
      <Card.Title title={nombre} subtitle={localidad} />
      <Card.Content>
        <Text style={styles.telefono}>{telefono}</Text>
      </Card.Content>
      <Card.Cover source={{ uri: imagen }} />
    </Card>
  );
};

export default Gimnasio;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#0f9fff',
    borderRadius: 10,
    marginBottom: 10,
  },
  telefono: {
    marginBottom: 10,
  },
});
