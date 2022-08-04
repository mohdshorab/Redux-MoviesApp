import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LikedMovies from "../../screens/LikedMovies";
import FavouriteMovies from "../../screens/FavouriteMovies";
import Dashboard from "../../screens/Dashboard";
import MyTabs from "../bottomTabNav/BottomTabNav";
import { Image, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    return (
        <Drawer.Navigator initialRouteName="Dashboard" >
            <Drawer.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    drawerIcon: () => (
                        <Image style={styles.imgIcon} source={{ uri: 'https://img.icons8.com/office/344/home--v1.png' }}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="Liked Movies"
                component={LikedMovies}
                options={{
                    drawerIcon: () => (
                        <Image style={styles.imgIcon} source={{ uri: 'https://img.icons8.com/color/344/facebook-like--v1.png' }}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="Favourite Movies"
                component={FavouriteMovies}
                options={{
                    drawerIcon: () => (
                        <Image style={styles.imgIcon} source={{ uri: 'https://img.icons8.com/external-flat-icons-pause-08/344/external-favourite-winter-flat-icons-pause-08.png' }}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    imgIcon: {
        height: 20,
        width: 20
    }
})

export default DrawerNav