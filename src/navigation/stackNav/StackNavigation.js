import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../../screens/Dashboard";
import DrawerNav from "../drawerNav/Drawer";
import DetailsScreen from "../../screens/movieDetails/DetailsScreen";
import WatchLater from "../../screens/WatchLater";

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (

        // all screens inside a Stack.Navigator automatically get a navigation props(given by stackNav)
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Drawer"
        >
            <Stack.Screen
                name="DetailsScreen"
                component={DetailsScreen}
            />

            <Stack.Screen
                name="dashboard"
                component={Dashboard}
            />

            <Stack.Screen
                name="Drawer"
                component={DrawerNav}
            />
            {/* <Stack.Screen 
            name="WatchLater"
            component={ WatchLater }
            /> */}
        </Stack.Navigator >
    )
}


export default StackNavigation;