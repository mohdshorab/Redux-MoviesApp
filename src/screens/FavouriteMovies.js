import React from "react";
import { FlatList, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, Image } from "react-native";
import { connect } from "react-redux";
import { removeFromFav } from "../redux/actions/actions";

class FavouriteMovies extends React.Component {

    render() {
        const { favMovies } = this.props;

        const removeFromFavourites = (movie) => {
            this.props.dispatchRemoveFromFavMovies(movie);
        }

        return (
            <View style={styles.container}>
                {(favMovies.length > 0) ?
                    <ScrollView>
                        {favMovies.map((movie, index) => (
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
                                        style={styles.removeBtn}
                                        onPress={() => {
                                            // console.log(index)
                                            removeFromFavourites(movie)
                                        }}
                                    >
                                        <Text style={styles.removeBtnText}>Remove From Favourite</Text>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                    :
                    <Text style={styles.noFavMovie} >If you love the movie, hit the "Heart" icon.</Text>

                }
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
    noFavMovie: {
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    count: {
        fontSize: 14,
        flex: 1,
        // alignSelf: 'center',
        color: "#6666ff"
    },
    removeBtn: {
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
    removeBtnText: {
        color: "red",
        fontSize: 14,
        fontWeight: 'bold'
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
    dispatchRemoveFromFavMovies: movie => removeFromFav(movie),
}


const mapStateToProps = (state) => ({
    favMovies: state.movieReducer.favMovies,
});

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteMovies);