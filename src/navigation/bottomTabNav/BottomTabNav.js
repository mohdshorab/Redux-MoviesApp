import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Bollywood from "../../screens/BollyWood";
import Hollywood from "../../screens/Hollywood";

const Tabs = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tabs.Navigator screenOptions={{ headerShown: false }}>
            <Tabs.Screen
                name="BOLLYWOOD"
                component={Bollywood}
                options={{
                    tabBarIcon: () => (<Image source={{ uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F102%2F838%2Foriginal%2Fvector-indian-city-monuments.jpg&f=1&nofb=1' }} style={styles.imgIcon} />)
                }} />
            <Tabs.Screen name="HOLLYWOOD" component={Hollywood} options={{
                tabBarIcon: () => (<Image source={{ uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.downloadclipart.net%2Flarge%2Fhollywood-sign-png-download-image.png&f=1&nofb=1' }} style={styles.imgIcon} />)
            }} />
        </Tabs.Navigator>
    )
}

const styles = StyleSheet.create({
    imgIcon: {
        width: 50,
        height: 25,
        borderRadius: 20
    }
})