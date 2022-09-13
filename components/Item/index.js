import { Text, TouchableOpacity, View } from "react-native"

import react from "react"
import { styles } from "./styles"

const RenderItem = ({item, onHandleModal}) => (
    <View style= {styles.itemListContainer}>
      <Text style={styles.item}>{item.value}</Text>
      <TouchableOpacity style={styles.buttonX} onPress={ () => onHandleModal(item.id)}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
    
  )

  export default RenderItem