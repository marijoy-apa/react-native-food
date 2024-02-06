import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultDetail from "./ResultDetails";

const ResultList = ({ title, results, navigation }) => {
    if (!results.length) {
        return null;
    }
    return <View style={styles.containier}>

        <Text style={styles.titleStyle}>{title}</Text>
        {/* <Text>{results.length}</Text> */}
        <FlatList
            horizontal
            data={results}
            keyExtractor={(result) => result.id
            }
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate('Result', {id: item.id})
                    }}>
                        <ResultDetail result={item} />
                    </TouchableOpacity>
                )
            }}
            showsHorizontalScrollIndicator={false}
        />
    </View>
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5
    },
    containier: {
        marginBottom: 10,
    }
})

export default ResultList;