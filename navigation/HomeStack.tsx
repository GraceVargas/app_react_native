import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListaScreen from '../screens/ListaScreen';
import DetalleScreen from '../screens/DetalleScreen';
import { HomeStackParamList } from '../types/navigation';



const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Lista" component={ListaScreen} />
    <Stack.Screen name="Detalle" component={DetalleScreen} />
  </Stack.Navigator>
);

export default HomeStack;