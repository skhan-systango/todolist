/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{ useState, useEffect} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  TextInput
} from 'react-native';
import TodoItem from '../../components/todoitem/TodoItem'
import Header from '../../components/header/Header'
import BottomSheet from 'reanimated-bottom-sheet';
import { verticalScale } from '../../utils/scale';
import {Keyboard} from 'react-native'
import styles from './style'

export default function TodoList() {
  const sheetRef = React.useRef(null);
  const [todoList, setTodoList] = useState([]);
  const [isEdit, changeEditMode] = useState(-1);
  const [inputDescription, updateInputDescription] = useState('');


  useEffect(() => {
    console.log(todoList)
  }, [todoList]);

  function handleAdd() {
    if(isEdit!=-1){
      var newArray = [...todoList];
      newArray[isEdit]['description'] = inputDescription;
      setTodoList(newArray)
    }else{
      setTodoList([ {
        description: `${inputDescription}`
    },...todoList])
    }
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

  function onClickEdit(index, item){
    changeEditMode(index)
    updateInputDescription(item.description);
    sheetRef.current.snapTo(0) 
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
        <Header onAddClick={()=> 
          {
            updateInputDescription('');
            sheetRef.current.snapTo(0);
            changeEditMode(-1)
          }
          }/>
        <FlatList
            contentContainerStyle={styles.listContaner}
            extraData={todoList}
            data={todoList}
            renderItem={(item)=>
            <TodoItem
              index={item.index}
              item={item.item}
              onTaskComplete={(index)=>onTaskComplete(index)}
              onClickEdit={(index, item)=>onClickEdit(index, item)}
              />
          }
            keyExtractor={item => item.id}
        />
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[verticalScale(100), 200, 0]}
        borderRadius={0}
        renderContent={renderContent}
      />
      </>
  );
};

