import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function people(props) {
  return (
    <View style={styles.row}>
      <View style={styles.people}>
        <Image style={styles.image} source={props.link}></Image>
        <View>
          <Text>{props.name}</Text>
          <Text style={styles.small}>{props.institute}</Text>
          <Text style={styles.blue}>{props.mutual}</Text>
        </View>
      </View>
      <View>
        <Image style={styles.image} source={require("../profile.png")}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  people: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
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
  blue: {
    fontSize: 12,
    color: "#2B68A0",
  },
});
