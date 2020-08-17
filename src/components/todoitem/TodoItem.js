/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import materialTheme from '../../utils/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style'

export default function TodoItem({index, item, onTaskComplete, onClickEdit }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { onTaskComplete(''+index) }}>
        <Image source={item.isCompleted ? materialTheme.IMAGES.CHECK : materialTheme.IMAGES.UN_CHECK} style={styles.image} />
      </TouchableOpacity>
      <Text  onPress={() => { onClickEdit(index, item) }}  style={item.isCompleted?styles.completedTodoText:styles.todoText} >{item.description}</Text>
    </View>
  );
};
