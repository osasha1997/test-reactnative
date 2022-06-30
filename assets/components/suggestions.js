import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { useState } from "react";
import React from "react";
import People from "./people";

export default function Suggestions() {
  const [people, setPeople] = useState([
    {
      image: require("../profile.png"),
      name: "Rich Novak",
      institute: "French School of Kuala Lumpur",
      mutual: "8 Mutual Friends",
      key: "1",
    },
    {
      image: require("../profile.png"),
      name: "Honda Takumi",
      institute: "French School of Kuala Lumpur",
      key: "2",
    },
  ]);
  return (
    <View style={styles.bgwhite}>
      <View style={styles.row}>
        <Text style={styles.heading}>People you may know</Text>
      </View>
      <View>
        {people.map((item) => {
          return(
            <People key={item.key} link={item.image} name={item.name} institute={item.institute} mutual={item.mutual}></People>
          )
        })}
      </View>
      <Text style={styles.link}>See more</Text>
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
  link: {
    fontSize: 12,
    textAlign: "center",
    paddingTop: 8,
    color: "#015493",
  },
});
