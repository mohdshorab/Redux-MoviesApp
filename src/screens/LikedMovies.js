import React from "react";
import { FlatList, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, Image } from "react-native";
import { connect } from "react-redux";
import { removeFromLikedMovies, removeFromWatchLater } from "../redux/actions/actions";

class LikedMovies extends React.Component {
    render() {

        const { likedMovies } = this.props;

        const removeFromLikedMovies = (movie) => {
            this.props.dispatchRemoveFromLikedMovies(movie);
        }
        return (

            <View style={styles.container}>
                {(likedMovies.length > 0) ?
                    <ScrollView>
                        {likedMovies.map((movie, index) => (
                            <TouchableOpacity style={styles.card} >
                                <Image style={styles.image} source={{ uri: movie.imageUrl }} />
                                <View style={styles.cardContent}>
                                    <Text style={styles.movieName}>{movie.name}</Text>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View>
                                            <Text>Genre</Text>
                                            <Text style={styles.movieCardSubDetails}>{movie.genre}</Text>
                                        </View>
                                        <View>
                                            <Text>Year</Text>
                                            <Text style={styles.movieCardSubDetails}>{movie.releaseYear}</Text>
                                        </View>
                                        <View>
                                            <Text>Runtime</Text>
                                            <Text style={styles.movieCardSubDetails}>{movie.runtime}</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity
                                        style={styles.removeFromLikedMovieBtn}
                                        onPress={() => {
                                            // console.log(index)
                                            removeFromLikedMovies(movie)
                                        }}
                                    >
                                        <Text style={styles.removeFromLikedMovieBtnText}>Remove From Liked Movies</Text>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                    :
                    <Text style={styles.noLikedMovie} >If you enjoyed the movie, hit the "like" button.</Text>

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
    noLikedMovie: {
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    cardContent: {
        marginLeft: 20,
        marginTop: 2
    },
    movieCardSubDetails: {
        fontSize: 14,
        flex: 1,
        // alignSelf: 'center',
        color: "#6666ff"
    },
    removeFromLikedMovieBtn: {
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
    removeFromLikedMovieBtnText: {
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

    movieName: {
        fontSize: 18,
        flex: 1,
        alignSelf: 'center',
        color: "red",
        fontWeight: 'bold'
    },
});

const mapDispatchToProps = {
    dispatchRemoveFromLikedMovies: movie => removeFromLikedMovies(movie),
}


const mapStateToProps = (state) => ({
    likedMovies: state.movieReducer.likedMovies,
});

export default connect(mapStateToProps, mapDispatchToProps)(LikedMovies);