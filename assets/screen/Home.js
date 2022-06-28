import {useState} from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import React from 'react';
import Header from '../components/header';
import Options from '../components/options';


export default function Home() {
    const [types, setTypes] = useState([
        {name: 'People', key: '1'},
        {name: 'Courses', key: '2'},
        {name: 'Institutions', key: '3'},
        {name: 'Scholarship', key: '4'},
        {name: 'Certification', key: '5'},
    ]);
  return (
     <View>
        <Header/>
        <View style={styles.panel}>
            {/* <ScrollView>
                <Text>{options}</Text>
            </ScrollView> */}
            <FlatList horizontal data={types} renderItem={({item}) => (
                <Options name={item.name}/>
            )}></FlatList>
        </View>
     </View>
  )
}

const styles = StyleSheet.create({
    panel: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#eee',
        flexDirection: "row",
        flexWrap: "wrap",
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 7,
    }
})