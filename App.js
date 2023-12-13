import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity  } from 'react-native'
import { useState } from 'react'
import CustomModal from './components/CustomModal'
import CustomInput from './components/CustomInput'


export default function App() {
  const [textItem, setTextItem] = useState('')
  const [itemList, setItemList] = useState([])
  const [itemSelectedToDelete, setItemSelectedToDelete] = useState({})
  const [editingItem, setEditingItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false)

  const onChangeTextHandler = (text) => {
    setTextItem(text)
    //console.log(text)
  }

  const addItemToList = () => {
    setItemList(prevState => [...prevState, { id: Math.random().toString(), value: textItem, completada:false }])
    //console.log(itemList)
    setTextItem()
  }

  const onSelectItemHandler = (id) => {
    setModalVisible(!modalVisible)
    setItemSelectedToDelete(itemList.find((item) => item.id === id))
  }

  const onDeleteItemHandler = () => {
    setItemList(itemList.filter((item) => item.id !== itemSelectedToDelete.id))
    setModalVisible(!modalVisible)
  }
  const onEditItemHandler = (id) => {
    setEditingItem(id);
    setTextItem(itemList.find((item) => item.id === id).value);
    // Puedes abrir el modal de edición aquí si lo deseas
  };
  const editItem = () => {
    setItemList((prevItems) =>
      prevItems.map((item) =>
        item.id === editingItem ? { ...item, value: textItem } : item
      )
    );
    setEditingItem(null);
    setTextItem('');
  }; 
  

  const toggleComplete = (id) => {
    setItemList((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completada: !item.completada } : item
      )
    );
  };

const renderListItem = ({ item }) => (
  <TouchableOpacity
    style={styles.itemList}
    onPress={() => toggleComplete(item.id)}
    onLongPress={() => onEditItemHandler(item.id)}
  >
    <Text style={{ textDecorationLine: item.completada ? 'line-through' : 'none' }}>
      {item.value}
    </Text>
    <Button title="x" color="#FF5733" onPress={() => onSelectItemHandler(item.id)} />
  </TouchableOpacity>
);


  return (
    <>
      <View style={styles.container}>
        <CustomInput
          placeholderProp="Ingresá la tarea"
          textItemProp={textItem}
          onChangeTextHandlerEvent={onChangeTextHandler}
          addItemToListEvent={addItemToList}
        />
        <FlatList
          data={itemList}
          renderItem={renderListItem}
          keyExtractor={item => item.id}
        />
      </View>
      <CustomModal 
        animationTypeProp="slide"
        isVisibleProp={modalVisible}
        itemSelectedProp={itemSelectedToDelete}
        onDeleteItemHandlerEvent={onDeleteItemHandler}
        setModalVisibleEvent={setModalVisible}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3c096c',
    padding: 30,
    color:"#fff"
  },

  itemList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: "#636363",
    borderRadius: 10,
  },
  customModal:{
    backgroundColor:"#3c096c"
  }

});