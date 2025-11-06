import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect } from "react";
import BookCard from "../components/BookCard";
import useBooks from "../api/useBooks";

const HomeScreen = () => {
  const { bookList, getListOfBooks } = useBooks();

  useEffect(() => {
    getListOfBooks();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {bookList.map((book) => (
        <BookCard
          key={book.id}
          title={book.name_of_author}
          price={book.price_of_book}
          author={book.email_of_seller}
          image={{ uri: book.cover }}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});

export default HomeScreen;
