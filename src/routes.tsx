import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';

import Heroes from './pages/Heroes';
import Details from './pages/Details';
import Favorites from './pages/Favorites';
import SearchHero from './pages/SearchHero';
import { IStackParamList } from './types/IStackParamList';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<IStackParamList>();

function HeroesStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Heroes} />
      <Stack.Screen name='Details' component={Details} />
      <Stack.Screen name='SearchHero' component={SearchHero} />
    </Stack.Navigator>
  )
}

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName = 'users';

            if (route.name === 'Favorites') {
              iconName = 'star';
            }

            return <Icon name={iconName} size={size} color={color} />;
          }
        })}
      >
        <Tab.Screen name='Heroes' component={HeroesStackScreen} />
        <Tab.Screen name='Favorites' component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Routes;
