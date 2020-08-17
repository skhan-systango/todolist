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
  TouchableOpacity
} from 'react-native';


export default function Header({onAddClick}) {
  return (
     <View style={styles.container}>
        <Text style={styles.titleText}>TODO LIST</Text>
        <TouchableOpacity onPress={()=>onAddClick()} style={styles.addBtn}>
          <Text style={styles.btnText}>ADD</Text>
        </TouchableOpacity>
     </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderColor: '#000',
    height: 56,
    flexDirection: 'row',
    backgroundColor: '#3b5998',
    justifyContent:'center',
    alignItems: 'center'
  },
  titleText:{
      fontSize: 18,
      color: 'white'
  },
  addBtn:{
    margin: 16,
    backgroundColor: 'green',
    position: 'absolute',
    right: 0,
    padding: 5,
    paddingHorizontal: 8,
    borderRadius: 5
  },
  btnText: {
    color: 'white',
    fontSize: 14
  }
});

