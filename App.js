import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { withTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStackScreen from './screens/Home/HomeStack';
import AuthStack from './screens/Auth/AuthStack';

function DetailsScreen() {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Details!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

const App = (props) => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        if (route.name === 'Home') {
                            return (
                                <Ionicons
                                    name="home-sharp"
                                    size={size}
                                    color={color}
                                />
                            );
                        } else if (route.name === 'Cart') {
                            return (
                                <Ionicons
                                    name="cart-sharp"
                                    size={size}
                                    color={color}
                                />
                            );
                        } else if (route.name === 'Account') {
                            return (
                                <MaterialCommunityIcons
                                    name="account"
                                    size={size}
                                    color={color}
                                />
                            );
                        }
                    },
                })}
                tabBarOptions={{
                    activeTintColor: props.theme.colors.primary,
                    inactiveTintColor: 'gray',
                    labelStyle: { fontSize: 12 },
                }}>
                <Tab.Screen name="Home" component={HomeStackScreen} />
                <Tab.Screen name="Cart" component={DetailsScreen} />
                <Tab.Screen name="Account" component={AuthStack} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default withTheme(App);
