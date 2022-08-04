import React from "react";
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Image,
} from 'react-native';
import { connect } from 'react-redux';

class Bollywood extends React.Component {
    bollywood = () => {
        this.props.dispatchLoadbollywoodMovies(this.state)
    };
    render() {
        const { bollywood } = this.props;

        return (
            <View style={styles.container}>
                <ScrollView style={styles.ScrollViewContainer}>
                    {bollywood.map((bollywood, index) => (
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
        marginTop: 6
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
    }
});

const mapDispatchToProps = {
    dispatchLoadbollywoodMovies: bollywood => bollywood(bollywood),
};

const mapStateToProps = state => ({
    bollywood: state.BollywoodReducer.bollywood,
});

export default connect(mapStateToProps, mapDispatchToProps)(Bollywood);