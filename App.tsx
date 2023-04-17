import { NavigationContainer, RouteProp, } from '@react-navigation/native';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';
import ScreenA from './src/screens/ScreenA';

type RootStackParamList = {
  Home: undefined;
  ScreenA: undefined;
  ListScreen: undefined;
};

export type ScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;
export type ScreenRouteProp = RouteProp<RootStackParamList>;


const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ScreenA" component={ScreenA} />
        <Stack.Screen name="ListScreen" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
