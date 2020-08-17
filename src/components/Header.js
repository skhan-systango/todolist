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
import materialTheme from '../utils/theme';
import scale, { verticalScale } from '../utils/scale';


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
    padding: scale(8),
    borderColor: materialTheme.COLORS.BLACK,
    height: 56,
    flexDirection: 'row',
    backgroundColor: materialTheme.COLORS.HEADER_COLOR,
    justifyContent:'center',
    alignItems: 'center'
  },
  titleText:{
      fontSize: 18,
      color: materialTheme.COLORS.WHITE
  },
  addBtn:{
    margin: scale(16),
    backgroundColor: materialTheme.COLORS.BTN_BG,
    position: 'absolute',
    right: 0,
    padding: 5,
    paddingHorizontal: 8,
    borderRadius: 5
  },
  btnText: {
    color: materialTheme.COLORS.WHITE,
    fontSize: 14
  }
});

