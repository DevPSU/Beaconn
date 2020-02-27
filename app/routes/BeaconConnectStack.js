import { createStackNavigator } from 'react-navigation-stack';

import BeaconConnectScreen from '../screens/BeaconConnectScreen';
import CheckInScreen from '../screens/CheckInScreen';
import EngagementScreen from '../screens/EngagementScreen';
import InboxScreen from '../screens/InboxScreen';

import Header from '../shared/Header';
import React from 'react';

const screens = {
    BeaconConnect: { 
        screen: BeaconConnectScreen,
        navigationOptions: ({ navigation }) =>  {
            return{
                headerTitle: () => <Header navigation={navigation}  title='Connection'/>,
            }
        }
     },
    CheckIn:{
        screen: CheckInScreen,
        title: 'Check In'
    },
    Engagement:{
        screen: EngagementScreen,
        title: 'Engagement'
    },
    Inbox:{
        screen: InboxScreen,
        title: 'Inbox'
    }
}

const BeaconConnectStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 80 }
    }
});

export default BeaconConnectStack;