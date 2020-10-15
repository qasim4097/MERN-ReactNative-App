import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Register from './Register';

const HomeStack = createStackNavigator();

export default function HomeStackScreen() {
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerTintColor: '#000',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    alignSelf: 'center',
                },
                headerStyle: {
                    backgroundColor: '#eee',
                },
            }}>
            <HomeStack.Screen name="Login" component={Login} />
            <HomeStack.Screen name="Register" component={Register} />
        </HomeStack.Navigator>
    );
}
