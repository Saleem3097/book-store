import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import BookCard from "../components/BookCard";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});

export default HomeScreen;
