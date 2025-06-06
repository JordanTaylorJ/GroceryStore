import React from 'react'
import { Text,StyleSheet,SafeAreaView} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import DairyScreen from '../screens/DairyScreen';
import FruitsScreen from '../screens/FruitsScreen';
import VegetablesScreen from '../screens/VegetablesScreen';
import BakeryScreen from '../screens/BakeryScreen';

const Tab = createBottomTabNavigator();
//safeareaview is removing screens UI - need to investivate 

function TabNavigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView stlye={styles.safeArea}></SafeAreaView>
          <Text style={styles.brandName}>FreshMart</Text>
          <Tab.Navigator>
            <Tab.Screen
              name="Fruits"
              component={FruitsScreen}
              options={{
                headerShown:false
              }}
            />
            <Tab.Screen
              name="Vegetables"
              component={VegetablesScreen}
              options={{
                headerShown:false
              }}
            />
            <Tab.Screen
              name="Dairy"
              component={DairyScreen}
              options={{
                headerShown:false
              }}
            />
            <Tab.Screen
              name="Bakery"
              component={BakeryScreen}
              options={{
                headerShown:false
              }}
            />
          </Tab.Navigator>
        
      </NavigationContainer>
    </SafeAreaProvider>
    
  )
}

export default TabNavigator

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  title: { fontSize: 27, marginBottom: 10, textAlign:'center',color: 'black', fontStyle:'italic'},
  itemContainer: { flexDirection: 'row', marginBottom: 10, alignItems: 'center' },
  image: { width: 120, height: 120, marginRight: 10 },
  details: { marginLeft:40,alignItems:'center',justifyContent:'center',width:200 },
  name: { fontSize: 19 },
  price: { color: 'green', fontWeight: 'bold'},
  addToCart: { color: 'blue', fontWeight: 'bold' },
  button: {
    backgroundColor: '#F48021',
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    // fontWeight: 'bold',
    fontSize:13
  },
  safeArea: {
    flex: 1,
    paddingTop: 40,  // Sets 40px space from the top
  },
  brandName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#F48021',
    marginBottom: 10,
  }
});

export {styles}