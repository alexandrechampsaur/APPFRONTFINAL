import React, {useState} from 'react';
import { View, FlatList, StyleSheet, Keyboard, Button} from 'react-native';

import CategoryItem from '../components/CategoryItem';
import Colors from '../constantes/Colors';
import CategoryInput from '../components/CategoryInput';

import {useSelector, useDispatch} from 'react-redux';
import { detailsAdded, detailsDeleted } from '../Redux/actions';


const DetailsScreen = (props) => {
  const dispatch = useDispatch();

  const recetteClickedData = useSelector(state => state.recettesReducer.recetteClickedList);
  const recetteOrigine = recetteClickedData[recetteClickedData.length -1].name;

  const detailsData = useSelector(state => state.detailsReducer.detailsList);
  const [newDetails, setNewDetails] = useState('');

  const detailsInputHandler = (enteredDetails) => {
    setNewDetails(enteredDetails);
  };
  
  const addDetailsHandler = () => {
    dispatch(detailsAdded(newDetails,recetteOrigine));
    Keyboard.dismiss();
    setNewDetails('');
  };

  const deleteDetailsHandler = (toDeleteKey) => {
    dispatch(detailsDeleted(toDeleteKey));
  }

  const renderItem = (itemData) => {
    if (itemData.item.origine === recetteOrigine) {
      return(
        <CategoryItem 
          onDelete={deleteDetailsHandler.bind(this, itemData.item.key)}
          title={itemData.item.name}
          clickedId={itemData.item.key}
        />
      )
    }
  };


  return (
    <View style={styles.screen}>
      <View style={styles.listContainer}>
        <FlatList
          data={detailsData}
          renderItem={renderItem}
          numColumns={2}
        />
        {/* <Button title="test3" onPress={()=>console.log(recetteClickedData)}/> */}
      </View>
      <View style={styles.addContainer}>
        <CategoryInput onAdd={addDetailsHandler} value={newDetails} inputHandler={detailsInputHandler} placeholder="Détails recette"/>
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


export default DetailsScreen;