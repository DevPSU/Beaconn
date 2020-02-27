import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import TestScreen from '../screens/Test';
import Header from '../shared/Header';
import React from 'react';

const screens = {
    Home: { 
        screen: HomeScreen,
        navigationOptions: ({ navigation }) =>  {
            return{
                headerTitle: () => <Header navigation={navigation}  title="Configuration"/>,
            }
        }
     },
    Test: { 
        screen: TestScreen,
        navigationOptions:{
            title: 'Test',
        }
     }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 80 }
    }
});

export default HomeStack;