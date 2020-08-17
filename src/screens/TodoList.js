/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{ useState, useEffect} from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  FlatList,
  TouchableOpacity,
  Text,
  TextInput
} from 'react-native';
import TodoItem from '../components/TodoItem'
import Header from '../components/Header'
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import materialTheme from '../utils/theme';
import scale, { verticalScale } from '../utils/scale';
import {Keyboard} from 'react-native'


export default function TodoList() {
  const sheetRef = React.useRef(null);
  const [todoList, setTodoList] = useState([]);
  const [inputDescription, updateInputDescription] = useState('');


  useEffect(() => {
    console.log(todoList)
  }, [todoList]);

  function handleAdd(text='Todo items') {
    setTodoList([ {
        description: `${todoList.length+1}. ${inputDescription}`
    },...todoList])
    updateInputDescription('')
    Keyboard.dismiss();
    sheetRef.current.snapTo(2)
  }

  function onTaskComplete(index) {
    var newArray = [...todoList];
    newArray[index]['isCompleted'] = !newArray[index]['isCompleted'];
    console.log(newArray)
    setTodoList(newArray)
  }

  const renderContent = () => (
    <View
      style={styles.bottomSheetContainer}
    >
    <TextInput
      style={styles.inputConainer}
      value={inputDescription}
      placeholder={'Enter task description'}
      onChangeText={(value)=>updateInputDescription(value)}
      autoFocus={true}
    />
    <TouchableOpacity disabled={inputDescription===''} onPress={()=>handleAdd()} style={styles.addBtn}>
          <Text style={styles.btnText}>DONE</Text>
        </TouchableOpacity>
    </View>
  );



  return (
    <>
      <View style={styles.container}>
        <Header onAddClick={()=> {updateInputDescription(''); sheetRef.current.snapTo(0) }}/>
        <FlatList
            contentContainerStyle={styles.listContaner}
            extraData={todoList}
            data={todoList}
            renderItem={(item)=><TodoItem index={item.index} item={item.item} onTaskComplete={(index)=>onTaskComplete(index)}/>}
            keyExtractor={item => item.id}
        />
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[verticalScale(100), 200, 0]}
        borderRadius={20}
        renderContent={renderContent}
      />
      </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContaner:{
      marginHorizontal: scale(16),
      paddingVertical: verticalScale(16)
  },
  inputConainer:{
    height: verticalScale(20),
    borderColor: materialTheme.COLORS.GREY, 
    borderWidth: 1,
    borderRadius: 5,
    marginTop: verticalScale(10)
  },
  bottomSheetContainer:{
    backgroundColor: materialTheme.COLORS.WHITE,
    padding: 16,
    height: verticalScale(100),
    borderRadius: 1,
  },
  addBtn:{
    margin: 16,
    backgroundColor: materialTheme.COLORS.BTN_BG,
    position: 'absolute',
    right: 0,
    bottom: 0,
    padding: 5,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  btnText: {
    color: materialTheme.COLORS.WHITE,
    fontSize: 14
  }
});

