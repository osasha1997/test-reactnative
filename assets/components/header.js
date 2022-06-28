import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Options from "./options";

export default function Header() {
  const [types, setTypes] = useState([
    { name: "People", key: "1" },
    { name: "Courses", key: "2" },
    { name: "Institutions", key: "3" },
    { name: "Scholarship", key: "4" },
    { name: "Certification", key: "5" },
  ]);
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.row}>
          <View style={styles.button}>
            <Button style={styles.button} title={"<"}></Button>
          </View>
          <TextInput style={styles.input} placeholder={"Search"}></TextInput>
        </View>
      </View>
      <View style={styles.panel}>
        <FlatList
          horizontal
          data={types}
          renderItem={({ item }) => <Options name={item.name} />}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    width: "100%",
    alignSelf: "stretch",
    textAlign: "center",
    paddingTop: 40,
    borderWidth: 1,
    borderColor: "#eee",
    paddingBottom: 5,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    backgroundColor: "#fff",
    padding: 5,

    width: "15%",
  },
  input: {
    backgroundColor: "#eee",
    height: 45,
    padding: 10,
    width: "80%",
  },
  panel: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#eee",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 7,
  },
});
