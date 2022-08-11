import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WatchLater from "../../screens/WatchLater";
import FavouriteMovies from "../../screens/FavouriteMovies";
import Dashboard from "../../screens/Dashboard";
import { Image, StyleSheet } from "react-native";


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
                name="Saved For Later"
                component={WatchLater}
                options={{
                    drawerIcon: () => (
                        <Image style={styles.imgIcon} source={{ uri: 'https://img.icons8.com/dusk/344/save--v1.png' }}
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
            {/* <Drawer.Screen
                name="DetailsScreen"
                component={DetailsScreen}
                options={{
                    drawerIcon: () => (
                        <Image style={styles.imgIcon} source={{ uri: 'https://img.icons8.com/external-flat-icons-pause-08/344/external-favourite-winter-flat-icons-pause-08.png' }}
                        />
                    )
                }}
            /> */}
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