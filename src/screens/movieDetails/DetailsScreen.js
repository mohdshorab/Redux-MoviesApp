import React from 'react';
import { View, SafeAreaView, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import COLORS from '../../consts/colors';
import { connect } from 'react-redux';
import { addTofav, addToLikedMovies, addToWatchLater, removeFromFav, removeFromLikedMovies, removeFromWatchLater } from '../../redux/actions/actions';


class DetailsScreen extends React.Component {
    render() {
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
            <SafeAreaView
                style={{
                    flex: 1,
                    backgroundColor: COLORS.white,
                }}>
                <View style={style.imageContainer}>
                    <Image source={{ uri: this.props.route.params.imageUrl }} style={{ height: 150, width: 200, flex: 1 }} />
                </View>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('Dashboard');
                    }}
                    style={{
                        position: 'absolute',
                        top: 10,
                        left: 10,
                    }}
                >
                    <Image
                        style={{ height: 30, width: 30, color: COLORS.red }}
                        source={{ uri: 'https://img.icons8.com/flat-round/2x/back--v1.png' }}
                    />
                </TouchableOpacity>
                <View style={style.detailsContainer}>
                    <View
                        style={{
                            marginLeft: 20,
                            flexDirection: 'row',
                            alignItems: 'flex-end',
                        }}>
                        {/* <View style={style.line} /> */}
                        <Text style={{ fontSize: 28, fontWeight: 'bold' }}>{this.props.route.params.name}</Text>
                    </View>
                    <View
                        style={{
                            marginLeft: 20,
                            marginTop: 20,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Genre : {this.props.route.params.genre}</Text>
                        <View style={style.imdbRating}>
                            <Text
                                style={{
                                    marginLeft: 15,
                                    color: COLORS.white,
                                    fontWeight: 'bold',
                                    fontSize: 14,
                                }}>
                                IMDB  {this.props.route.params.imdbRating}
                            </Text>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>About</Text>
                        <Text
                            style={{
                                color: 'grey',
                                fontSize: 16,
                                lineHeight: 22,
                                marginTop: 10,
                            }}>
                            {this.props.route.params.overview}
                        </Text>
                        <View
                            style={{
                                marginTop: 20,
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',
                            }}>

                            {/* Liked Movies */}
                            {(!this.props.likedMovies.find(element => element.name == this.props.route.params.name)) ?
                                <View style={style.bottomBtns}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            addToLikedMovies(this.props.route.params)
                                        }}
                                    >
                                        <Text
                                            style={{ color: COLORS.white, fontSize: 18, fontWeight: 'bold' }}>
                                            Like
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                :
                                <View style={style.bottomBtns}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            removeFromLikedMovies(this.props.route.params)
                                        }}
                                    >
                                        <Text
                                            style={{ color: COLORS.white, fontSize: 18, fontWeight: 'bold' }}>
                                            Remove like
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            }


                            {/* saved Movies */}
                            {(!this.props.watchLaterMovies.find(element => element.name == this.props.route.params.name)) ?
                                <View style={style.bottomBtns}>
                                    <TouchableOpacity
                                        onPress={
                                            () => {
                                                addToWatchLater(this.props.route.params)
                                            }
                                        }
                                    >
                                        <Text
                                            style={{ color: COLORS.white, fontSize: 18, fontWeight: 'bold' }}>
                                            Watch Later
                                        </Text>
                                    </TouchableOpacity>
                                </View> :
                                <View style={style.bottomBtns}>
                                    <TouchableOpacity
                                        onPress={
                                            () => {
                                                removeFromWatchLater(this.props.route.params)
                                            }
                                        }
                                    >
                                        <Text
                                            style={{ color: COLORS.white, fontSize: 18, fontWeight: 'bold' }}>
                                            Remove saved
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            }
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
};

const style = StyleSheet.create({

    imageContainer: {
        flex: 0.45,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'red',
        shadowOffset: {
            width: -2,
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    detailsContainer: {
        flex: 0.55,
        backgroundColor: COLORS.light,
        marginHorizontal: 7,
        marginBottom: 7,
        borderRadius: 20,
        marginTop: 30,
        paddingTop: 30,
    },
    line: {
        width: 25,
        height: 2,
        backgroundColor: COLORS.dark,
        marginBottom: 5,
        marginRight: 3,
    },
    borderBtn: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 40,
    },
    borderBtnText: { fontWeight: 'bold', fontSize: 28 },
    bottomBtns: {
        width: 120,
        height: 35,
        backgroundColor: COLORS.red,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    imdbRating: {
        backgroundColor: COLORS.red,
        width: 80,
        height: 40,
        justifyContent: 'center',
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
    },
});


const mapDispatchToProps = {
    dispatchAddToFav: bollywoodMovie => addTofav(bollywoodMovie),
    dispatchWatchLater: movie => addToWatchLater(movie),
    dispatchAddToLiked: movie => addToLikedMovies(movie),
    dispatchRemoveFromLikedMovies: movie => removeFromLikedMovies(movie),
    dispatchRemoveFromFav: bollywoodMovie => removeFromFav(bollywoodMovie),
    dispatchRemoveFromSaved: bollywoodMovie => removeFromWatchLater(bollywoodMovie),
}


const mapStateToProps = state => ({
    bollywood: state.movieReducer.bollywood,
    favMovies: state.movieReducer.favMovies,
    watchLaterMovies: state.movieReducer.watchLaterMovies,
    likedMovies: state.movieReducer.likedMovies,
});


export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);