import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Modal from './Modal';

// Criar um Stack Navigator
const Stack = createStackNavigator();

const App = () => {
  const [modal, setModal] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }} />
        {/* Adicione outras telas aqui, se necessário */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
