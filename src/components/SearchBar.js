import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return <View style={styles.backgroundStyle}>
    <Feather style={styles.iconStyle} name="search"/>
    <TextInput
      style={styles.inputStyle}
      placeholder="Search"
      value={term}
      onChangeText={newTerm => onTermChange(newTerm)}
      autoCapitalize="none"
      autoCorrect={false}
      onEndEditing={() => onTermSubmit()}
    />
  </View>
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#f0eeee',
    height: 50,
    borderRadius: 6,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 15,
    marginHorizontal: 20
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
  inputStyle: {
    fontSize: 18,
    flex: 1,
  },
});

export default SearchBar;
