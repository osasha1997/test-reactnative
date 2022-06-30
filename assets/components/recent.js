import { StyleSheet, Text, View, FlatList } from "react-native";
import { useState } from "react";
import React from "react";
import Result from "./result";

export default function Recent() {
  const [search, setTypes] = useState([
    {
      image: require("../icon-search.png"),
      search: "I want to study marketing in England",
      key: "1",
    },
    {
      image: require("../icon-search.png"),
      search: "Institution that offer medical in Malaysia",
      key: "2",
    },
    { image: require("../profile.png"), search: "Danny William", key: "3" },
    {
      image: require("../profile.png"),
      search: "University of Wollongong",
      type: "Institute",
      key: "4",
    },
  ]);
  return (
    <View style={styles.bgwhite}>
      <View style={styles.row}>
        <Text style={styles.heading}>Recent searches</Text>
        <Text style={styles.clear}>Clear</Text>
      </View>
      <View>
        {search.map((item) => {
          return(
            <Result key={item.key} link={item.image} search={item.search} type={item.type}></Result>
          )
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bgwhite: {
    backgroundColor: "#fff",
    marginTop: 10,
    paddingBottom: 10,
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
  clear: {
    color: "#2B68A0",
    fontSize: 12,
    textAlign: "right",
    paddingTop: 5,
  },
});
