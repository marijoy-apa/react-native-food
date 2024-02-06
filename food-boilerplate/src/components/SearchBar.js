import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name='search' style={styles.iconStyle} />
      <TextInput
        placeholder='Search'
        placeholderTextColor="#000"
        style={styles.inputStyle}
        value={term}
        autoCorrect={false}
        autoCapitalize='none'
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,

    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,


    marginHorizontal: 15,
    // alignItems: 'center'
    flexDirection: 'row',
    // borderColor: 'red',
    // borderWidth: 1,
    marginBottom: 10,

  },
  inputStyle: {
    fontSize: 18,
    flex: 1,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,

  }

});

export default SearchBar;
