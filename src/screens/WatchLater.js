import React from "react";
import { FlatList, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, Image } from "react-native";
import { connect } from "react-redux";
import { removeFromWatchLater } from "../redux/actions/actions";

class WatchLater extends React.Component {
    render() {

        const { watchLaterMovies } = this.props;

        const removeFromWatchLater = (movie) => {
            this.props.dispatchRemoveFromWatchLater(movie);
        }
        return (
            <View style={styles.container}>
                <ScrollView>
                    {watchLaterMovies.map((movie, index) => (
                        <TouchableOpacity style={styles.card} >
                            <Image style={styles.image} source={{ uri: movie.imageUrl }} />
                            <View style={styles.cardContent}>
                                <Text style={styles.name}>{movie.name}</Text>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View>
                                        <Text>Genre</Text>
                                        <Text style={styles.count}>{movie.genre}</Text>
                                    </View>
                                    <View>
                                        <Text>Year</Text>
                                        <Text style={styles.count}>{movie.releaseYear}</Text>
                                    </View>
                                    <View>
                                        <Text>Runtime</Text>
                                        <Text style={styles.count}>{movie.runtime}</Text>
                                    </View>
                                </View>
                                <TouchableOpacity
                                    style={styles.followButton}
                                    onPress={() => {
                                        // console.log(index)
                                        removeFromWatchLater(movie)
                                    }}
                                >
                                    <Text style={styles.followButtonText}>Remove From Favourite</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: "#ebf0f7"
    },
    cardContent: {
        marginLeft: 20,
        marginTop: 2
    },
    count: {
        fontSize: 14,
        flex: 1,
        // alignSelf: 'center',
        color: "#6666ff"
    },
    followButton: {
        marginTop: 10,
        height: 28,
        width: 180,
        padding: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "red",
    },
    followButtonText: {
        color: "red",
        fontSize: 14,
        fontWeight: 'bold'
    },

    tiles: {
        padding: 20,
        flexDirection: 'row',
    },
    image: {
        height: 110,
        width: 100,
        borderRadius: 15,
        marginRight: 15
    },
    card: {
        shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        height: 130,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        backgroundColor: "white",
        padding: 10,
        flexDirection: 'row',
        borderRadius: 30,
    },

    name: {
        fontSize: 18,
        flex: 1,
        alignSelf: 'center',
        color: "red",
        fontWeight: 'bold'
    },
});

const mapDispatchToProps = {
    dispatchRemoveFromWatchLater: movie => removeFromWatchLater(movie),
}


const mapStateToProps = (state) => ({
    watchLaterMovies: state.movieReducer.watchLaterMovies,
});

export default connect(mapStateToProps, mapDispatchToProps)(WatchLater);