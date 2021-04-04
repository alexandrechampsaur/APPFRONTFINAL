import 'react-native-gesture-handler';
import React  from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PaysScreen from './screens/PaysScreen';
import RecettesScreen from './screens/RecettesScreen';
import DetailsScreen from './screens/DetailsScreen';

import Colors from './constantes/Colors';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {configureStore, persistor} from './Redux/store';

const store = configureStore;

const Stack = createStackNavigator();

export default function App(props) {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
          screenOptions={{ 
            headerStyle: {
              backgroundColor: 'white',
              borderBottomColor: Colors.primary,
              borderBottomWidth:2,
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: "200",
              color: Colors.primary,
              fontSize: 28,
            },
            headerTitleAlign: 'center',
          }}
          >
            <Stack.Screen
              name="Pays"
              component={PaysScreen}
            />
            <Stack.Screen 
              name="Recettes" 
              component = {RecettesScreen}
              options = {
                ({route}) => ({title: route.params.headName})
              }
            />
            <Stack.Screen 
              name="Détails" 
              component = {DetailsScreen}
              options = {
                ({route}) => ({title: route.params.headName})
              }
            />
            
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
