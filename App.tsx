import { NavigationContainer, RouteProp,  } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import ScreenA from './src/screens/ScreenA';
import ScreenB from './src/screens/ScreenB';

type RootStackParamList = {
  Home: undefined;
  ScreenA: undefined;
  ScreenB: undefined;
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
        <Stack.Screen name="ScreenB" component={ScreenB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
