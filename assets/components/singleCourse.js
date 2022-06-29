import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Single(props) {
  return (
    <View style={styles.row}>
      <View style={styles.course}>
        <Image style={styles.image} source={props.link}></Image>
        <View>
          <Text>{props.course}</Text>
          <Text style={styles.small}>{props.institute}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  course: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 15,
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
