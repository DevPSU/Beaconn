
import { createStackNavigator } from "react-navigation-stack";

import UserSettingsScreen from "../screens/UserSettingsScreen";
import ChangePasswordScreen from "../screens/ChangePasswordScreen";

import Header from '../shared/Header';
import React from 'react';

const screens = {
  UserSettings: {
    screen: UserSettingsScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Settings" />
      };
    }
  },
  ChangePassword: {
    screen: ChangePasswordScreen
  }
};

const SettingsStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#eee", height: 80 }
  }
});

export default SettingsStack;
