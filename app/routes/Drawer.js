import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import HomeStack from './HomeStack';
import BeaconConnectStack from './BeaconConnectStack'
import UnAuthStack from './UnauthStack'
import SettingsStack from './SettingsStack'

const RootDrawerNavigator = createDrawerNavigator({
    AuthState:{
        screen: UnAuthStack
    },
    Configuration: {
        screen: HomeStack
    },
    Beacon: {
        screen: BeaconConnectStack
    },
    Settings:{
        screen: SettingsStack
    }
})

export default createAppContainer(RootDrawerNavigator)
