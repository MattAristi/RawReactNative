import {AddTasks, CustomFlatList, CustomModal, RenderItem} from './components/index';
import { Button, StyleSheet, Text, View } from 'react-native';

import { useState } from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
  title: {
    marginTop: 30,
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
    <RenderItem item={item} onPress={ () => onHandleModal(item.id)} key={item.id}/>
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
      <CustomFlatList
        data={tasks}
        renderItem= {renderItem}
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

