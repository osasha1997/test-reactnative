import React, { useState } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import SingleArticle from "./singleArticle";

export default function articles(props) {
  const [article, setArticle] = useState([
    {
      image: require("../article.webp"),
      title: "Why the Freelance Life may get easier",
      author: "Monash University",
      profile: require("../profile.png"),
      date: "22 Nov, 2020",
      key: 1,
    },
    {
      image: require("../article.webp"),
      title: "How much do Intern Students begin To...",
      author: "Yuzee",
      profile: require("../profile.png"),
      date: "30 Jun, 2022",
      key: 2,
    },
  ]);
  return (
    <View style={styles.bgwhite}>
      <View style={styles.row}>
        <Text style={styles.heading}>Latest Articles for Today</Text>
        <Text style={styles.link}>See More</Text>
      </View>
      <FlatList
        horizontal
        data={article}
        renderItem={({ item }) => (
          <SingleArticle
            image={item.image}
            title={item.title}
            author={item.author}
            profile={item.profile}
            date={item.date}
          />
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  bgwhite: {
    backgroundColor: "#fff",
    marginTop: 10,
    paddingBottom: 10,
    marginBottom: 120,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  heading: {
    fontSize: 18,
  },
  link: {
    fontSize: 12,
    paddingTop: 8,
    color: "#015493",
  },
});
