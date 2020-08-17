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
    borderColor: 'white',
    backgroundColor: 'white',
    shadowOpacity: 0.90,
    shadowRadius: 8,
    elevation: 1,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 },
    paddingHorizontal: 16,
    paddingVertical: 9
  },
  todoText:{
      fontSize: 16,
    //   textDecorationLine: 'line-through',
    //   textDecorationStyle: 'solid'
  }
});

