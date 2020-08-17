/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import materialTheme from '../utils/theme';


export default function TodoItem({item}) {
  return (
     <View style={styles.container}>
        <Text style={styles.todoText} >{item.description}</Text>
     </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    marginBottom: 12,
    alignSelf: 'stretch',
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: materialTheme.COLORS.WHITE,
    backgroundColor: materialTheme.COLORS.WHITE,
    shadowOpacity: 0.90,
    shadowRadius: 8,
    elevation: 1,
    shadowColor: materialTheme.COLORS.BLACK,
    shadowOffset: { height: 0, width: 0 },
    paddingHorizontal: 16,
    paddingVertical: 9
  },
  todoText:{
      fontSize: 16,
  },
  completedTodoText:{
    fontSize: 16,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
}
});

