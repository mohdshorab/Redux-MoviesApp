import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../../screens/Dashboard";
import DrawerNav from "../drawerNav/Drawer";

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Drawer">
            <Stack.Screen
                name="dashboard"
                component={Dashboard}
            />
            <Stack.Screen
                name="Drawer"
                component={DrawerNav}
            />
        </Stack.Navigator >
    )
}


export default StackNavigation;