import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';

const ResultDetail = ({ result }) => {
    return <View style={styles.container}>
        <Image
            source={{ uri: result.image_url }}
            style={styles.imageStyle}
        />
        <Text
            style={styles.nameStyle}
        >{result.name}
        </Text>
        <Text>{result.rating} Stars, {result.review_count} Review Count</Text>

    </View>
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 10,
        marginBottom: 5
    },
    nameStyle: {
        fontWeight: "bold",
        fontSize: 16,
    }, 
    container:{
        marginLeft: 15,
        
        // marginRight: 10,
    }
})

export default ResultDetail;