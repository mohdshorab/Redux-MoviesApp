import React from 'react';
import { View, SafeAreaView, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import COLORS from '../../consts/colors';


class DetailsScreen extends React.Component {
    render() {
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
                        <View style={style.priceTag}>
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
                            {/* <View style={style.buyBtn}>
                                <Text
                                    style={{ color: COLORS.white, fontSize: 18, fontWeight: 'bold' }}>
                                    Add to fav
                                </Text>
                            </View> */}
                            <View style={style.buyBtn}>
                                <Text
                                    style={{ color: COLORS.white, fontSize: 18, fontWeight: 'bold' }}>
                                    Like
                                </Text>
                            </View>
                            <View style={style.buyBtn}>
                                <Text
                                    style={{ color: COLORS.white, fontSize: 18, fontWeight: 'bold' }}>
                                    Watch Later
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
};

const style = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
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
    buyBtn: {
        width: 120,
        height: 35,
        backgroundColor: COLORS.red,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    priceTag: {
        backgroundColor: COLORS.red,
        width: 80,
        height: 40,
        justifyContent: 'center',
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
    },
});



export default DetailsScreen;