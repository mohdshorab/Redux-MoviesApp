import React from "react";
import { View, StyleSheet } from "react-native";
import ImageCarousel from "../components/ImageCarousel";
import MyTabs from "../navigation/bottomTabNav/BottomTabNav";

class Dashboard extends React.Component {

    render() {
        return (
            <>
                <View style={styles.imgCarousel} >
                    <ImageCarousel />
                </View>
                <MyTabs />
            </>
        )
    }
}

const styles = StyleSheet.create({
    imgCarousel: {
        height: 170,
    },

})

export default Dashboard; 