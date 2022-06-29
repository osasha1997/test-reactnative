import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function singleArticle(props) {
  return (
    <View style={styles.article}>
      <Image style={styles.image} source={props.image}></Image>
      <View style={styles.innerbox}>
        <Text style={styles.heading}>{props.title}</Text>
        <Text style={styles.small}>Written by {props.author}</Text>
        <View style={styles.row}>
          <Image style={styles.profile} source={props.profile}></Image>
          <Text style={styles.small}>{props.date}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  article: {
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 8,
    width: 250,
    height: 300,
    margin: 10,
  },
  image: {
    width: "100%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    height: 150,
  },
  innerbox: {
    padding: 10,
  },
  heading: {
    paddingTop: 15,
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  small: {
    paddingTop: 10,
    fontSize: 12,
    color: "#aaa",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingBottom: 10,
  },
  profile: {
    width: 20,
    height: 20,
  },
});
