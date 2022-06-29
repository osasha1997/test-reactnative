import React, { useState } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import Single from "./singleCourse";

export default function courses(props) {
  const [courses, setCourses] = useState([
    {
      image: require("../profile.png"),
      course: "Bachelor of Computer Science (Hons)",
      institute: "The University of Melbourne",
      key: 1,
    },
    {
      image: require("../profile.png"),
      course: "Bachelor of Business Administration",
      institute: "The University of Melbourne",
      key: 2,
    },
    {
      image: require("../profile.png"),
      course: "Bachelor of Fine Arts",
      institute: "The University of Melbourne",
      key: 3,
    },
  ]);
  return (
    <View style={styles.bgwhite}>
      <View style={styles.row}>
        <Text style={styles.heading}>Top 10 Courses</Text>
      </View>
      <FlatList
        data={courses}
        renderItem={({ item }) => (
          <Single
            link={item.image}
            course={item.course}
            institute={item.institute}
          />
        )}
      ></FlatList>
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
