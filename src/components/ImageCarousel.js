import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, ScrollView, Dimensions, Image, Text } from "react-native";


const IMAGES = [
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Froxarmy.com%2Fwp-content%2Fuploads%2F2020%2F10%2FThe_batman_movie.jpeg&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.moviegasm.com%2Fwp-content%2Fuploads%2F2019%2F06%2Fdoctor-strange-2.jpg&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3rd-strike.com%2Fwp-content%2Fuploads%2F2021%2F03%2FZack-Snyders_Justice-League-scaled.jpg&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frecombu-images.imgix.net%2Fapp%2Fuploads%2F2020%2F10%2FThe-Boys-Season-3.jpg%3Ffm%3Dpjpg%26ixlib%3Dphp-3.3.0&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FVAjwkyJIbFo%2Fmaxresdefault.jpg&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.prime1studio.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fthumbnail%2F9df78eab33525d08d6e5fb8d27136e95%2Fm%2Fm%2Fmmsz-01dx_a11_fix.jpg&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.filmyt.com%2Fwp-content%2Fuploads%2F2021%2F08%2Fthor-love-and-thunder-2022.jpg&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fchonthuonghieu.com%2Fwp-content%2Fuploads%2F2022%2F01%2FShang-Chi-and-The-Legend-of-The-Ten-Rings-1536x863.jpg&f=1&nofb=1'
]

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ImageCarousel = () => {
    const [carouselActiveImage, setCarouselActiveImage] = useState(0);

    const onchange = (event) => {
        if (event) {
            const slide = Math.ceil(event.contentOffset.x / event.layoutMeasurement.width);
            if (slide != carouselActiveImage) {
                setCarouselActiveImage(slide);
            }
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageView}>
                <ScrollView
                    onScroll={({ nativeEvent: event }) => onchange(event)}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                    style={styles.imageView}
                >{
                        IMAGES.map((key, index) => <Image key={key} resizeMode='stretch' style={styles.imageView} source={{ uri: key }} />)
                    }

                </ScrollView>
                <View style={styles.imageCarouselDOts} >
                    {
                        IMAGES.map((key, index) =>
                            <Text
                                key={key}
                                style={carouselActiveImage == index ? styles.imageCarouselActiveDot : styles.imageCarouselInactiveDot}
                            >
                                ●
                            </Text>
                        )
                    }
                </View>
            </View>

        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageView: {
        width: WIDTH,
        height: HEIGHT * 0.25,
    },
    imageCarouselDOts: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    imageCarouselActiveDot: {
        margin: 3,
        color: 'grey',
        fontSize: 30
    },
    imageCarouselInactiveDot: {
        margin: 3,
        color: 'white',
        fontSize: 30
    }

})

export default ImageCarousel;
