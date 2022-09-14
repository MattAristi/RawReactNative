import {Text, TouchableOpacity, View} from 'react-native'

import React from 'react'
import { styles } from './styles'

const RenderItem = ({onPress, item})=>{
    return (
        <View style= {styles.itemListContainer}>
            <Text style={styles.item}>{item.value}</Text>
            <TouchableOpacity style={styles.buttonX} onPress={onPress}>
            <Text style={styles.delete}>X</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RenderItem