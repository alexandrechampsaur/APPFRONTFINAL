import React, {useState} from 'react';
import { View, FlatList, StyleSheet, Keyboard, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CategoryItem from '../components/CategoryItem';
import Colors from '../constantes/Colors';
import CategoryInput from '../components/CategoryInput';

import {useSelector, useDispatch} from 'react-redux';
import { paysAdded, paysDeleted, paysClicked } from '../Redux/actions';


const PaysScreen = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const paysData = useSelector(state => state.paysReducer.paysList);
  const paysClickedData = useSelector(state => state.paysReducer.paysClickedList);

  const [newPays, setNewPays] = useState('');

  const catInputHandler = (enteredPays) => {
    setNewPays(enteredPays);
  };
  
  const addPaysHandler = () => {
    dispatch(paysAdded(newPays));
    Keyboard.dismiss();
    setNewPays('');
  };

  const deletePaysHandler = (toDeleteKey) => {
    dispatch(paysDeleted(toDeleteKey));
  }


  return (
    <View style={styles.screen}>
      <View style={styles.listContainer}>
        <FlatList
          data={paysData}
          renderItem={itemData =>
            <CategoryItem
              onDelete={deletePaysHandler.bind(this, itemData.item.key)}
              title={itemData.item.name}
              onPressHandler={()=>{
                  dispatch(paysClicked(itemData.item.name));
                  navigation.push("Recettes", {headName: itemData.item.name});
                }}
            />}
          numColumns={2}
        />
        {/* <Button title="test" onPress={()=>console.log(paysClickedData)}/> */}
      </View>
      <View style={styles.addContainer}>
        <CategoryInput onAdd={addPaysHandler} value={newPays} inputHandler={catInputHandler} placeholder="Nouveau Pays"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.third,
  },
  listContainer:{
    backgroundColor: Colors.third,
    flex: 5,
  },
});


export default PaysScreen;