import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ItemScreen from './screens/ItemScreen';
import CustomerScreen from './screens/CustomerScreen';
import CustomerAddScreen from './screens/CustomerAddScreen'; // Import the AddCustomerScreen
import { store } from './app/store';
import { MaterialIcons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import { StyleSheet, Text } from 'react-native';

export type RootStackParamList = {
    Home: undefined;
    Item: undefined;
    CustomerStack: undefined;
};

export type CustomerStackParamList = {
    Customer: undefined;
    CustomerAdd: undefined;
};

const Drawer = createDrawerNavigator<RootStackParamList>();
const CustomerStack = createStackNavigator<CustomerStackParamList>();

// Customer Stack Navigator
const CustomerStackNavigator = () => {
    return (
        <CustomerStack.Navigator>
            <CustomerStack.Screen
                name="Customer"
                component={CustomerScreen}
                options={{ headerShown: false }}
            />

            <CustomerStack.Screen
                name="CustomerAdd"
                component={CustomerAddScreen}
                options={{
                    title: 'Add Customer',
                    headerLeft: () => null,
                    presentation: 'modal'
                }}
            />
        </CustomerStack.Navigator>
    );
};

// Drawer Navigator
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: styles.drawer,
                sceneContainerStyle: styles.sceneContainer,
                drawerType: 'slide',
                drawerContentOptions: {
                    activeTintColor: '#fff',
                    inactiveTintColor: '#888',
                    labelStyle: styles.labelStyle,
                },
            }}
        >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    title: 'Home',
                    drawerIcon: ({ color }) => (
                        <MaterialIcons name="home" size={24} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Item"
                component={ItemScreen}
                options={{
                    headerShown: true,
                    title: 'Item',
                    drawerIcon: ({ color }) => (
                        <MaterialIcons name="diamond" size={24} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="CustomerStack"
                component={CustomerStackNavigator}
                options={{
                    headerShown: false,
                    title: 'Customer',
                    drawerIcon: ({ color }) => (
                        <Entypo name="users" size={24} color={color} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
};

// Main App
export default function App() {
    return (
        <ReduxProvider store={store}>
            <PaperProvider>
                <NavigationContainer>
                    <DrawerNavigator />
                </NavigationContainer>
            </PaperProvider>
        </ReduxProvider>
    );
}

// Styles
const styles = StyleSheet.create({
    drawer: {
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        width: '70%',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: -2, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 6,
    },
    sceneContainerStyle: {
        backgroundColor: '#f5f5f5',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
    },
    labelStyle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
