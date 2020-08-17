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
  Text,
  Image
} from 'react-native';
import materialTheme from '../utils/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function TodoItem({index, item, onTaskComplete }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { onTaskComplete(''+index) }}>
        <Image source={item.isCompleted ? materialTheme.IMAGES.CHECK : materialTheme.IMAGES.UN_CHECK} style={styles.image} />
      </TouchableOpacity>
      <Text style={item.isCompleted?styles.completedTodoText:styles.todoText} >{item.description}</Text>
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
    paddingVertical: 9,
    flexDirection: 'row',
    alignItems: 'center'
  },
  todoText: {
    fontSize: 16,
    color: materialTheme.COLORS.BLACK
  },
  completedTodoText: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: materialTheme.COLORS.GREY
  },
  image: {
    width: 18,
    height: 18,
    marginRight: 10,
    padding: 5
  }
});

