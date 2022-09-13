import {AddTasks, CustomModal} from './components/index';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import RenderItem from './components/Item';
import { useState } from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    alignItems: 'center',

  },
  title: {
    marginTop: 30,
  },
  
  itemListContainer: {
    backgroundColor: '#D4CBB3',
    borderRadius: 5,
    flex: 1,
    width: '70%',
    marginVertical: 5,
    marginLeft: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginVertical: 10,
   
  },
  itemList: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  item: {
    fontSize: 16,
  },
  buttonX: {
    backgroundColor: 'black',
    padding:10,
    borderRadius: 5,
  },
  delete: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#CE84AD'
  },
  modalContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText:{
    color:'black',
    fontSize: 16,
  },
  modalMsjContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalMsj: {
    fontSize:14,
  },
  selectedTask: {
    fontSize:18,

  },
  buttonContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },

});

export default function App() {
  const [task, setTask]= useState('')
  const [tasks, setTasks]=useState([])
  const [modalVisible, setModalVisible]= useState(false)
  const [selectedTask, setSelectedTask]= useState(null)

  const onHandleChangeText= (text) => {
    const textLow= text
    setTask(textLow[0].toUpperCase()+ textLow.substring(1));
  }
  const addItem = () => {
    setTasks([
      ...tasks,
      {
      id: Date.now(),
      value: task
      }
    ]);
    setTask('');
  }

  const onHandleModal= (id) => { 
    setModalVisible(!modalVisible)
    setSelectedTask(tasks.find((item) => item.id === id))
  }

  const renderItem = ({item}) => (
    <View style= {styles.itemListContainer}>
      <Text style={styles.item}>{item.value}</Text>
      <TouchableOpacity style={styles.buttonX} onPress={ () => onHandleModal(item.id)}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
    
  )


  const onHandleDelete = () => {
    setTasks(tasks.filter((item) => item.id !== selectedTask.id))
    setSelectedTask(null)
    setModalVisible(!modalVisible)
  }

  return (
    <View style={styles.container}>
      <AddTasks
        placeholder='Text'
        item={task}
        onChangeText={onHandleChangeText}
        addItem={addItem}
        color='black'
        textButton='ADD'
      />
      <FlatList
        style={styles.itemList}
        data={tasks}
        renderItem= {renderItem}
        keyExtractor= {(item) => item.id.toString()}
      />
      <CustomModal animationType='slide' visible={modalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Detalle</Text>
        </View>
        <View style={styles.modalMsjContainer}>
          <Text style={styles.modalMsj}>Quieres eliminarlo?</Text>
        </View>
        <View style={styles.modalMsjContainer}>
          <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title='Borrar' onPress={ () => onHandleDelete(selectedTask?.id)} color='#CE84AD'></Button>
          <Button  title='Cancelar' onPress={() => setModalVisible(!modalVisible)} color='black'></Button>
        </View>
      </CustomModal>
    </View>
  );
}

