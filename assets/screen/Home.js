import { useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import React from "react";
import Header from "../components/header";
import Options from "../components/options";
import Recent from "../components/recent";
import Suggestions from "../components/suggestions";

export default function Home() {
  return (
    <View>
      <Header />
      <Recent />
      <Suggestions />
    </View>
  );
}

const styles = StyleSheet.create({});
