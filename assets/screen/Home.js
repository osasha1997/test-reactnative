import { useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import React from "react";
import Header from "../components/header";
import Recent from "../components/recent";
import Suggestions from "../components/suggestions";
import Courses from "../components/courses";
import Articles from "../components/articles";

export default function Home() {
  return (
    <ScrollView>
      <Header />
      <Recent />
      <Suggestions />
      <Courses />
      <Articles />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
