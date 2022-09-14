import { FlatList } from 'react-native';
import { styles } from './styles';

const CustomFlatList = ({data,renderItem}) => {
    return (
    <FlatList
    style={styles.itemList}
    data={data}
    renderItem= {renderItem}
    keyExtractor= {(item) => item.id.toString()}
/>
)}

export default CustomFlatList

