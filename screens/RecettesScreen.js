import React, {useState} from 'react';
import { View, FlatList, StyleSheet, Keyboard, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CategoryItem from '../components/CategoryItem';
import Colors from '../constantes/Colors';
import CategoryInput from '../components/CategoryInput';

import {useSelector, useDispatch} from 'react-redux';
import { recetteAdded, recetteDeleted, recetteClicked } from '../Redux/actions';


const RecettesScreen = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const recettesData = useSelector(state => state.recettesReducer.recettesList);

  const paysClickedData = useSelector(state => state.paysReducer.paysClickedList);
  const paysOrigine = paysClickedData[paysClickedData.length -1].name;

  const [newRecette, setNewRecette] = useState('');

  const recettesInputHandler = (enteredRecette) => {
    setNewRecette(enteredRecette)
  };
  
  const addRecetteHandler = () => {
    dispatch(recetteAdded(newRecette, paysOrigine));
    Keyboard.dismiss();
    setNewRecette('');
  };

  const deleteRecetteHandler = (toDeleteKey) => {
    dispatch(recetteDeleted(toDeleteKey));
  };

  const renderItem = (itemData) => {
    if (itemData.item.origine === paysOrigine) {
      return(
        <CategoryItem 
          onDelete={deleteRecetteHandler.bind(this, itemData.item.key)}
          title={itemData.item.name}
          onPressHandler={()=>{
            dispatch(recetteClicked(itemData.item.name));
            navigation.push("Détails", {headName: itemData.item.name});
          }}
        />
      )
    }
  };


  return (
    <View style={styles.screen}>
      <View style={styles.listContainer}>
        <FlatList
          data={recettesData}
          renderItem={renderItem}
          numColumns={2}
        />
        {/* <Button title="test2" onPress={()=>console.log(paysOrigine)}/> */}
      </View>
      <View style={styles.addContainer}>
        <CategoryInput onAdd={addRecetteHandler} value={newRecette} inputHandler={recettesInputHandler} placeholder="Nouvelle recette"/>
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


export default RecettesScreen;