import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Courses from './Courses'
import Profile from './Profile'


const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Courses" component={Courses} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
/*
export default function Home() {
  return (
    <Text>Home</Text>
  );
}
*/

