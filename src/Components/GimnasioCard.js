import { StyleSheet } from 'react-native';
import { Avatar, Card } from 'react-native-paper';

const Gimnasio = ({ nombre, localidad, retornacion }) => {
  
  const imagen =
    'https://alpepools.com/wp-content/uploads/2004/03/308627553.jpg';

  const sendDataToParent = () => {
    const data = [nombre, localidad];
    retornacion(data);
  };

  return (
    <Card style={styles.card} onPress={sendDataToParent}>
      <Card.Title
        title={nombre}
        subtitle={localidad}
        left={(props) => (
          <Avatar.Icon {...props} icon={"camera"} style={styles.card} />
        )}
      />
      <Card.Cover
        source={{
          uri: imagen,
        }}
      />
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
});
