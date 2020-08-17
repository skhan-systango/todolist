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
  Text
} from 'react-native';
import TodoItem from '../components/TodoItem'
import Header from '../components/Header'

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);

//   useEffect(() => {
//   }, [todoList]);

  function handleAdd(text='Todo items') {
    setTodoList([ {
        description: `${todoList.length+1}. ${text}`
    },...todoList])
  }



  return (
      <View style={styles.container}>
        <Header onAddClick={()=> {handleAdd() }}/>
        <FlatList
            contentContainerStyle={styles.listContaner}
            extraData={todoList}
            data={todoList}
            renderItem={(item)=><TodoItem item={item.item}/>}
            keyExtractor={item => item.id}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContaner:{
      marginHorizontal: 16,
      paddingVertical: 16
  }
});

