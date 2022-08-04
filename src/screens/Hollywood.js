import React from "react";
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Image,
} from 'react-native';
import { connect } from 'react-redux';

class Hollywood extends React.Component {
    hollywood = () => {
        this.props.dispatchLoadhollywoodMovies(this.state)
    };

    render() {
        const { hollywood } = this.props;

        return (
            <View style={styles.container}>
                <ScrollView style={styles.ScrollViewContainer}>
                    {hollywood.map((hollywood, index) => (
                        <View style={styles.MovieListCard} key={index}>
                            <View>
                                <Image
                                    style={styles.image}
                                    source={{
                                        uri: hollywood.imgUrl,
                                    }} />
                            </View>
                            <View style={styles.movieInfo}>
                                <Text style={styles.movieName}>{hollywood.name}</Text>
                                <Text style={styles.movieSubDetails}> {hollywood.genre}</Text>
                                <Text style={styles.movieSubDetails}>imdb : {hollywood.imdbRating}</Text>
                                <Text style={styles.movieSubDetails}>Directed by : {hollywood.director}</Text>
                                <Image style={styles.heartIcon} source={{ uri: 'https://img.icons8.com/fluency/344/like.png' }} />
                            </View>
                        </View>
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
        marginTop: 6
    },

    image: {
        height: 120,
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
    }
});


const mapDispatchToProps = {
    dispatchLoadhollywoodMovies: hollywood => hollywood(hollywood),
};

const mapStateToProps = state => ({
    hollywood: state.HollywoodReducer.hollywood,
});

export default connect(mapStateToProps, mapDispatchToProps)(Hollywood);
