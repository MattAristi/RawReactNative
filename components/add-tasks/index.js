import {Button, TextInput, View} from 'react-native';

import react from "react";
import { styles } from './styles';

const AddTask = ({item, onChangeText, placeholder, addItem, textButton, color}) => {
    
    return(
        <View style={styles.inputContainer}>
        <TextInput placeholder={placeholder} style={styles.input} onChangeText={onChangeText} value={item}/>
        <Button title={textButton} color={color} onPress={addItem} />
      </View>
    )
   
  }

  export default AddTask