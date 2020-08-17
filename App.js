/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TodoList from './src/screens/todo/TodoList'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();



export default function App() {
  return (
    <>
      <StatusBar barStyle="auto" />
      <NavigationContainer >
        <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
          <Stack.Screen name="Todo List" component={TodoList} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};