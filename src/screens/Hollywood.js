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
import { addTofav, addToWatchLater } from "../redux/actions/actions";

class Hollywood extends React.Component {
    // hollywood = () => {
    //     this.props.dispatchLoadhollywoodMovies(this.state)
    // };

    render() {
        const { hollywood } = this.props;

        const addToFavourites = (hollywoodMovie) => {
            this.props.dispatchAddToFav(hollywoodMovie)
        }

        const addToWatchLater = (movie) => {
            this.props.dispatchWatchLater(movie);
        }

        return (
            <View style={styles.container}>
                <ScrollView style={styles.ScrollViewContainer}>
                    {hollywood.map((hollywood, index) => (
                        <TouchableOpacity
                            onPress={() => {
                                console.log(hollywood, index)
                                this.props.navigation.navigate('DetailsScreen', hollywood);
                            }}
                        >
                            <View style={styles.MovieListCard} key={index}>
                                <View>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: hollywood.imageUrl,
                                        }} />
                                </View>
                                <View style={styles.movieInfo}>
                                    <Text style={styles.movieName}>{hollywood.name}</Text>
                                    <Text style={styles.movieSubDetails}> {hollywood.genre}</Text>
                                    <Text style={styles.movieSubDetails}>imdb : {hollywood.imdbRating}</Text>
                                    <Text style={styles.movieSubDetails}>Directed by : {hollywood.director}</Text>
                                    <View style={styles.cardBotomButtons} >
                                        <TouchableOpacity onPress={() => {
                                            console.log(hollywood)
                                            addToFavourites(hollywood)
                                        }} >
                                            <Text style={styles.bottomBtn} >Add To Fav</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={
                                                () => {
                                                    addToWatchLater(hollywood)
                                                }
                                            }
                                        >
                                            <Text style={styles.bottomBtn} >Save for later</Text>
                                        </TouchableOpacity>

                                    </View>
                                    <Image style={styles.heartIcon} source={{ uri: 'https://img.icons8.com/fluency/344/like.png' }} />
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
        position: 'absolute',
        right: 10,
        top: 10
    },
    title: {
        paddingTop: 30,
        paddingBootom: 20,
        fontSize: 20,
        textAlign: 'center',
    },
    heartIcon: {
        fontSize: 30,
        backgroundColor: 'black'
    },

    ScrollViewContainer: {
        borderWidth: 1,
        borderTopColor: 'red',
        flex: 1,
    },

    MovieListCard: {
        padding: 20,
        flexDirection: 'row',
    },

    movieName: {
        fontSize: 15,
        color: 'black',
        marginRight: 10
    },

    movieSubDetails: {
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
    movieInfo: {
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
        borderColor: 'red'
    }
});

// As implied in its name, this function directs the dispatching or sending of an action by pointing it to an action creator. For example:
const mapDispatchToProps = {
    dispatchAddToFav: hollywoodMovie => addTofav(hollywoodMovie),
    dispatchWatchLater: movie => addToWatchLater(movie),
};


// Any changes to the state will be reflected in the component because it is “connected” to mapStateToProps and that information is now made available to the component through a prop.
const mapStateToProps = state => ({
    hollywood: state.movieReducer.hollywood,

});

export default connect(mapStateToProps, mapDispatchToProps)(Hollywood);
