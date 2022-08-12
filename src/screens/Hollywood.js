import React from "react";
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';
import COLORS from "../consts/colors";
import { connect } from 'react-redux';
import { addTofav, addToLikedMovies, addToWatchLater, removeFromFav, removeFromLikedMovies, removeFromWatchLater } from "../redux/actions/actions";

class Hollywood extends React.Component {
    // hollywood = () => {
    //     this.props.dispatchLoadhollywoodMovies(this.state)
    // };

    render() {
        const { hollywood } = this.props;

        const addToFavourites = (bollywoodMovie) => {
            this.props.dispatchAddToFav(bollywoodMovie);
        }

        const removeFromFavourites = (bollywoodMovie) => {
            this.props.dispatchRemoveFromFav(bollywoodMovie);
        }

        const addToWatchLater = (movie) => {
            this.props.dispatchWatchLater(movie);
        }

        const removeFromWatchLater = (movie) => {
            this.props.dispatchRemoveFromSaved(movie)
        }

        const addToLikedMovies = (movie) => {
            this.props.dispatchAddToLiked(movie);
        }

        const removeFromLikedMovies = (movie) => {
            this.props.dispatchRemoveFromLikedMovies(movie)
        }

        return (
            <View style={styles.container}>
                <ScrollView style={styles.ScrollViewContainer}>
                    {
                        hollywood.map((hollywood, index) => (
                            <TouchableOpacity onPress={() => {
                                console.log(hollywood, index)
                                this.props.navigation.navigate('DetailsScreen', hollywood);
                            }} >
                                <View style={styles.tiles} key={index}>
                                    <View>
                                        <Image
                                            style={styles.image}
                                            source={{
                                                uri: hollywood.imageUrl,
                                            }} />
                                    </View>
                                    <View style={styles.movieDetailsReview}>
                                        <View style={styles.movieDetails} >
                                            <Text style={styles.movieName}>{hollywood.name}</Text>
                                            <View style={styles.movieSubDetails} >
                                                <View>
                                                    <Text>Genre</Text>
                                                    <Text style={styles.movieDetails}> {hollywood.genre}</Text>
                                                </View>
                                                <View>
                                                    <Text>IMDB</Text>
                                                    <Text style={styles.movieDetails}>{hollywood.imdbRating}</Text>
                                                </View>
                                                <View>
                                                    <Text>Director</Text>
                                                    <Text style={styles.movieDetails}>{hollywood.director}</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={styles.bottomBtnView} >
                                            {(!this.props.likedMovies.find(element => element.name == hollywood.name)) ?
                                                <TouchableOpacity
                                                    onPress={() => {
                                                        addToLikedMovies(hollywood);
                                                    }}
                                                    style={styles.touchLikeIcon}
                                                >
                                                    <Image
                                                        style={styles.likeIcon}
                                                        source={{ uri: 'https://img.icons8.com/ios/344/facebook-like--v1.png' }}
                                                    />
                                                </TouchableOpacity>
                                                :
                                                <TouchableOpacity
                                                    style={styles.touchLikeIcon}
                                                    onPress={
                                                        () => {
                                                            removeFromLikedMovies(hollywood)
                                                        }
                                                    }
                                                >
                                                    <Image
                                                        style={styles.likeIcon}
                                                        source={{ uri: 'https://img.icons8.com/color/344/facebook-like--v1.png' }}
                                                    />
                                                </TouchableOpacity>
                                            }

                                            {/* Save for later */}
                                            {(!this.props.watchLaterMovies.find(element => element.name == hollywood.name)) ?
                                                <TouchableOpacity
                                                    style={styles.touchSaveIcon}
                                                    onPress={() => {
                                                        console.log(hollywood)
                                                        addToWatchLater(hollywood)
                                                    }}
                                                >
                                                    <Image
                                                        style={styles.saveIcon}
                                                        source={{ uri: 'https://img.icons8.com/external-bearicons-detailed-outline-bearicons/344/external-Save-social-media-bearicons-detailed-outline-bearicons.png' }}
                                                    />
                                                </TouchableOpacity>
                                                :
                                                <TouchableOpacity
                                                    style={styles.touchSaveIcon}
                                                    onPress={() => {
                                                        console.log(hollywood)
                                                        removeFromWatchLater(hollywood)
                                                    }}
                                                >
                                                    <Image
                                                        style={styles.saveIcon}
                                                        source={{ uri: 'https://img.icons8.com/external-bearicons-outline-color-bearicons/344/external-Save-social-media-bearicons-outline-color-bearicons.png' }}
                                                    />
                                                </TouchableOpacity>

                                            }

                                            {/* Add to favourite */}
                                            {
                                                (!this.props.favMovies.find(element => element.name == hollywood.name)) ?

                                                    <TouchableOpacity
                                                        style={styles.touchHeartIcon}
                                                        onPress={() => {
                                                            console.log(hollywood)
                                                            addToFavourites(hollywood);
                                                        }}
                                                    >
                                                        <Image style={styles.heartIcon} source={{ uri: 'https://img.icons8.com/ios/344/like--v1.png' }} />
                                                    </TouchableOpacity>
                                                    :
                                                    <TouchableOpacity
                                                        style={styles.touchHeartIcon}
                                                        onPress={() => {
                                                            console.log(hollywood)
                                                            removeFromFavourites(hollywood);
                                                        }}
                                                    >
                                                        <Image style={styles.heartIcon} source={{ uri: 'https://img.icons8.com/parakeet/344/experimental-like-parakeet.png' }} />
                                                    </TouchableOpacity>

                                            }
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>

                        ))
                    }

                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    heartIcon: {
        height: 25,
        width: 25,
        color: 'red'
    },
    likeIcon: {
        height: 25,
        width: 25,
        color: 'red'
    },
    saveIcon: {
        height: 20,
        width: 20,
        color: 'red'
    },
    title: {
        paddingTop: 30,
        paddingBootom: 20,
        fontSize: 20,
        textAlign: 'center',
    },
    touchSaveIcon: {
        position: 'absolute',
        left: 195,
        bottom: 4,
    },
    touchHeartIcon: {
        position: 'absolute',
        left: 115,
        bottom: 3,
    },
    touchLikeIcon: {
        position: 'absolute',
        left: 35,
        bottom: 3
    },
    ScrollViewContainer: {
        borderWidth: 1,
        borderTopColor: 'red',
        flex: 1,
    },

    tiles: {
        padding: 20,
        flexDirection: 'row',
    },

    movieName: {
        fontSize: 20,
        color: "red",
        alignSelf: 'center',
        marginRight: 10,
        fontWeight: 'bold'
    },

    movieDetails: {
        // fontSize: 14,
        // color: 'grey',
        // marginBottom: 6
        fontSize: 14,
        flex: 1,
        // alignSelf: 'center',
        color: "#6666ff"

    },
    movieSubDetails: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between'
    },

    image: {
        height: 120,
        width: 100,
        borderRadius: 15,
        marginRight: 15
    },
    movieDetailsReview: {
        padding: 5,
        backgroundColor: 'white',
        width: '70%',
        borderRadius: 15,
        elevation: 5
    },
    cardBotomButtons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    bottomBtn: {
        borderWidth: 1,
        padding: 3,
        borderRadius: 10,
        fontWeight: 'bold',
        backgroundColor: 'red',
        color: 'white',
        borderColor: 'red',
        width: 90,
        paddingLeft: 6
    },
    bottomBtnView: {
        borderWidth: 1,
        height: 30,
        borderRadius: 20,
        borderColor: COLORS.red,
    }
});

// As implied in its name, this function directs the dispatching or sending of an action by pointing it to an action creator. For example:
const mapDispatchToProps = {
    dispatchAddToFav: hollywoodMovie => addTofav(hollywoodMovie),
    dispatchWatchLater: movie => addToWatchLater(movie),
    dispatchRemoveFromFav: bollywoodMovie => removeFromFav(bollywoodMovie),
    dispatchRemoveFromSaved: bollywoodMovie => removeFromWatchLater(bollywoodMovie),
    dispatchAddToLiked: movie => addToLikedMovies(movie),
    dispatchRemoveFromLikedMovies: movie => removeFromLikedMovies(movie),
};


// Any changes to the state will be reflected in the component because it is “connected” to mapStateToProps and that information is now made available to the component through a prop.
const mapStateToProps = state => ({
    hollywood: state.movieReducer.hollywood,
    favMovies: state.movieReducer.favMovies,
    watchLaterMovies: state.movieReducer.watchLaterMovies,
    likedMovies: state.movieReducer.likedMovies,

});

export default connect(mapStateToProps, mapDispatchToProps)(Hollywood);
