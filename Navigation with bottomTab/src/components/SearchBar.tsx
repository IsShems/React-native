import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";

export default function SearchBar() {
    const [searchInput, setSearchInput] = useState('');

    const handleTextChange = (text: string) => {
        setSearchInput(text);
    }

    return (
        <View style={styles.searchBar}>
            <TextInput style={styles.searchText} placeholder="Search" onChangeText={handleTextChange} value={searchInput}/>
        </View>
    );
}

const styles = StyleSheet.create({
    searchText: {
        fontSize: 16,
        padding: 16,
        fontWeight: '500',
        color: '#BDBDBD'
    },
    searchBar:{
        borderWidth: 1,
        alignItems: 'center', 
        justifyContent: 'center',
        borderColor: '#E8E8E8',
        backgroundColor: '#F6F6F6',
        borderRadius: 30,
        marginVertical: 10,
        marginHorizontal: 10,
    }
});
