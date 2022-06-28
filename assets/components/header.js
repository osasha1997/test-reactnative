import { StyleSheet, Text, View , Button, TextInput } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.header}>
        <View style={styles.row}>
           <View style={styles.button}>
            <Button style={styles.button} title={'<'}></Button>
            </View>
           <TextInput style={styles.input} placeholder={'Search'}></TextInput>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#fff',
        width: '100%',
        alignSelf: 'stretch',
        textAlign: 'center',
        paddingTop:40,
        borderWidth: 1,
        borderColor: '#eee',
        paddingBottom:5,
    },
    row:{
        flexDirection: "row",
        flexWrap: "wrap",
    },
    button:{
        backgroundColor: "#fff",
        padding: 5,

        width: '15%',
    },
    input:{
        backgroundColor: '#eee',
        height: 45,
        padding: 10, 
        width: '80%',

    }
})