import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';
import Deputados from './screens/Deputados';
import Detalhes from './screens/Detalhes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="deputados" component={Deputados} options={{ title: 'Deputados' }} />
            <Stack.Screen name="detalhes" component={Detalhes} options={{ title: 'Detalhes' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}
