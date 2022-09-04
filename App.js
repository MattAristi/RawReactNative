import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    // alignItems: 'center',

  },
  inputContainer:{
    borderRadius:10,
    marginTop: 30,
    marginBottom: 20,
    marginHorizontal: 20
  },
  input: {
    borderBottomColor: '0A0908',
    borderBottomWidth: 2,
    height: 40
  },
  button: {
    backgroundColor:'0A0908',
    color: '#fffff',
    height:35,
    width:65
  }

});

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='text' style={styles.input}/>
        <Button title='add' style={styles.button} onPress={( ) => {console.warn('hola')}} />
      </View>
    </View>
  );
}

