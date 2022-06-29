import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function result(props) {
  return (
    <View style={styles.row}>
      <Image style={styles.image} source={props.link}></Image>
      <View>
        <Text>{props.search}</Text>
        <Text style={styles.small}>{props.type}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    paddingLeft: 10,
    paddingTop: 3,
    paddingBottom: 3,
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  small: {
    fontSize: 12,
    color: "#aaa",
  },
});
