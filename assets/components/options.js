import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Options(props) {
  return (
    <View>
      <Text style={styles.types}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    types:{
        borderColor: '#a9a9a9',
        borderWidth: 1,
        padding:5,
        margin:4,
        borderRadius:4,
        color: '#a9a9a9',
    }
})