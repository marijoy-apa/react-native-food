import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults('');

  console.log(results);

  const filterResultsByPrice = (price) => {
    //price === '$' || '$$' || '$$$'
    return results.filter((result) => {
      return result.price === price;

    })
  }

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => { searchApi(term) }}
      />
      {/* <Text>Search Screen</Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text >We have found {results.length} results</Text> */}
      <ScrollView>
        <ResultList
          title="Cost Effective"
          results={filterResultsByPrice('$')}
          navigation={navigation}
        />
        <ResultList
          title="Bit Pricier"
          results={filterResultsByPrice('$$')}
          navigation={navigation}

        />
        <ResultList
          title="Big Spender"
          results={filterResultsByPrice('$$$')}
          navigation={navigation}
        />
      </ScrollView>



    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
