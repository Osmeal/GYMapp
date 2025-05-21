import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-native-paper';

import { ScreenProvider } from './src/Screens/ScreenContext';
import LogIn from './src/Screens/LogIn.js';
import CrearCuenta from './src/Screens/CrearCuenta.js';
import Clases from './src/Screens/Clases.js';
import Clase from './src/Screens/Clase.js';
import Perfil from './src/Screens/Perfil.js';
import Gimnasios from './src/Screens/Gimnasios.js';
import MenuInicial from './src/Screens/MenuInicial';
import MenuGimnasio from './src/Screens/MenuGimnasio';
import AssetExample from './src/Screens/AssetExample';
const Stack = createStackNavigator();

export default function App() {
  return (
    <ScreenProvider>
      <Provider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="MenuInicial" component={MenuInicial} />
            <Stack.Screen name="MenuGimnasio" component={MenuGimnasio} />

            <Stack.Screen name="Gimnasios" component={Gimnasios} />
            <Stack.Screen name="Perfil" component={Perfil} />
            <Stack.Screen name="Crear Cuenta" component={CrearCuenta} />
            <Stack.Screen name="Clases" component={Clases} />
            <Stack.Screen name="Clase" component={Clase} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ScreenProvider>
  );
}
