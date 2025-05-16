import React, { useEffect, useState, useContext } from 'react';
import { View, Image, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { ScreenContext } from './ScreenContext';

const Horario = () => {
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(false);
  const { info } = useContext(ScreenContext);

  useEffect(() => {
    const fetchHorario = async () => {
      try {
        const response = await fetch(
          `https://api-nodejs-mysql-production-9366.up.railway.app/schedule/${info.id}`
        );
        const data = await response.json();

        if (data?.schedule) {
          setUrl(data.schedule);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Error al obtener el horario:', err);
        setError(true);
      }
    };

    if (info?.id) {
      fetchHorario();
    }
  }, [info]);

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={{ color: 'red' }}>No se pudo cargar el horario</Text>
      </View>
    );
  }

  if (!url) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.imagen} resizeMode="contain" />
    </View>
  );
};

export default Horario;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagen: {
    width: '100%',
    height: '100%',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
