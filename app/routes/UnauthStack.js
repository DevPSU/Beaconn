import { createStackNavigator } from 'react-navigation-stack';

import BeaconConnectScreen from '../screens/BeaconConnectScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';

const screens = {
    SignUp: { 
        screen: SignUpScreen
     },
    SignIn:{
        screen: SignInScreen
    }
}

const UnauthStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 80 }
    }
});

export default UnauthStack;