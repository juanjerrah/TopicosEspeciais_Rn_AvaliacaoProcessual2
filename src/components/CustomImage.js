import react from "react";
import { Text, StyleSheet, Image, View } from 'react-native';

export default function CustomImage({fromWeb, image, title}){
    return(
        <>
            <View style={styles.bgImg} blurType={'light'} blurAmount={20}>
                <Text style={styles.title}>
                    {title}
                </Text>
                {fromWeb || <View ><Image source={image} style={styles.imageStyle}/></View>}
                {!fromWeb || <View ><Image source={{uri: image}} style={styles.imageStyle}/></View>}
                <View style={styles.circle}></View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    title:{
        paddingTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        paddingBottom: 10
    },
    bgImg:{
        width: 250,
        height: 240,
        backgroundColor: '#2756e5',
        alignSelf: 'center',
        marginBottom: 10,
        borderRadius: 10,
    },
    imageStyle:{
        alignSelf: 'center',
        borderRadius: 10, 
        width: 213,
        height: 171,
    },
})