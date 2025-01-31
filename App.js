import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './src/screens/HomeScreen';
import ScanScreen from './src/screens/ScanScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import { Header } from 'react-native/Libraries/NewAppScreen';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <PaperProvider>
      <Text> TEST </Text>
      <NavigationContainer>
        <Text> TEST </Text>
        <Stack.Navigator initialRouteName="Home">
        <Text> TEST </Text>
          <Stack.Screen 
            name="Home"
            component={HomeScreen}
            options={{ title: 'Check-in System' }}
          />
          <Stack.Screen 
            name="Scan" 
            component={ScanScreen}
            options={{ title: 'Scan QR Code' }}
          />
          <Stack.Screen 
            name="History" 
            component={HistoryScreen}
            options={{ title: 'Check-in History' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}