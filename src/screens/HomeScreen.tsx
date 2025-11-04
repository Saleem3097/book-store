import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import BookCard from "../components/BookCard";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <BookCard
        title={"sallu"}
        price={50}
        author={"bhaiya"}
        image={{
          uri: "https://m.media-amazon.com/images/I/61rFpYUhzzL._AC_UF1000,1000_QL80_.jpg",
        }}
      />
      <BookCard
        title={"kallu"}
        price={60}
        author={"hayya"}
        image={{
          uri: "https://m.media-amazon.com/images/I/61rFpYUhzzL._AC_UF1000,1000_QL80_.jpg",
        }}
      />
      <BookCard
        title={"hallu"}
        price={70}
        author={"sayya"}
        image={{
          uri: "https://m.media-amazon.com/images/I/61rFpYUhzzL._AC_UF1000,1000_QL80_.jpg",
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});

export default HomeScreen;
