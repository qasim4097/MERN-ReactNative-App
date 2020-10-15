import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Vendors from './Vendors';
import Items from './Items';

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
            <HomeStack.Screen name="Vendors" component={Vendors} />
            <HomeStack.Screen
                name="Items"
                component={Items}
                options={({ route }) => ({ title: route.params.name })}
            />
        </HomeStack.Navigator>
    );
}
