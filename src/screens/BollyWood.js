import React from "react";
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { addTofav, addToWatchLater, removeFromFav } from "../redux/actions/actions";

class Bollywood extends React.Component {

    render() {
        console.log(this.props.favMovies.length)

        const { bollywood } = this.props;

        const addToFavourites = (bollywoodMovie) => {
            this.props.dispatchAddToFav(bollywoodMovie);
        }

        const removeFromFavourites = (bollywoodMovie) => {
            this.props.dispatchRemoveFromFav(bollywoodMovie);
        }

        const addToWatchLater = (movie) => {
            this.props.dispatchWatchLater(movie);
        }

        return (
            <View style={styles.container}>

                <ScrollView style={styles.ScrollViewContainer}>
                    {
                        bollywood.map((bollywood, index) => (
                            <TouchableOpacity onPress={() => {
                                console.log(bollywood, index)
                                this.props.navigation.navigate('DetailsScreen', bollywood);
                            }} >
                                <View style={styles.tiles} key={index}>
                                    <View>
                                        <Image
                                            style={styles.image}
                                            source={{
                                                uri: bollywood.imageUrl,
                                            }} />
                                    </View>
                                    <View style={styles.movieDetailsReview}>
                                        <Text style={styles.movieName}>{bollywood.name}</Text>
                                        <Text style={styles.movieDetails}> {bollywood.genre}</Text>
                                        <Text style={styles.movieDetails}>imdb : {bollywood.imdbRating}</Text>
                                        <Text style={styles.movieDetails}>Directed by : {bollywood.director}</Text>
                                        <View style={styles.cardBotomButtons} >
                                            <TouchableOpacity
                                                style={styles.bottomButtonTouch}
                                            >
                                                <Text style={styles.bottomBtn} >Add To Fav</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity
                                                onPress={() => {
                                                    console.log(bollywood)
                                                    addToWatchLater(bollywood)
                                                }}
                                            >
                                                <Text style={styles.bottomBtn} >Watch Later</Text>
                                            </TouchableOpacity>

                                        </View>
                                        {
                                            (!this.props.favMovies.find(element => element.name == bollywood.name)) ?

                                                <TouchableOpacity
                                                    style={styles.touchHeartIcon}
                                                    onPress={() => {
                                                        console.log(bollywood)
                                                        addToFavourites(bollywood);
                                                    }}
                                                >
                                                    <Image style={styles.heartIcon} source={{ uri: 'https://img.icons8.com/ios/344/like--v1.png' }} />
                                                </TouchableOpacity>
                                                :
                                                <TouchableOpacity
                                                    style={styles.touchHeartIcon}
                                                    onPress={() => {
                                                        console.log(bollywood)
                                                        removeFromFavourites(bollywood);
                                                    }}
                                                >
                                                    <Image style={styles.heartIcon} source={{ uri: 'https://img.icons8.com/fluency/344/like.png' }} />
                                                </TouchableOpacity>

                                        }
                                    </View>
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
    },
    heartIcon: {
        height: 25,
        width: 25,
        color: 'red'
    },
    title: {
        paddingTop: 30,
        paddingBootom: 20,
        fontSize: 20,
        textAlign: 'center',
    },
    touchHeartIcon: {
        position: 'absolute',
        right: 10,
        top: 10,
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
        fontSize: 15,
        color: 'black',
        marginRight: 10
    },

    movieDetails: {
        fontSize: 14,
        color: 'grey',
        marginBottom: 6
    },

    image: {
        height: 135,
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
});

const mapDispatchToProps = {
    dispatchAddToFav: bollywoodMovie => addTofav(bollywoodMovie),
    dispatchWatchLater: movie => addToWatchLater(movie),
    dispatchRemoveFromFav: bollywoodMovie => removeFromFav(bollywoodMovie)
}


const mapStateToProps = state => ({
    bollywood: state.movieReducer.bollywood,
    favMovies: state.movieReducer.favMovies
});

export default connect(mapStateToProps, mapDispatchToProps)(Bollywood);