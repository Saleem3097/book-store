import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import useBooks from "../api/useBooks";

export default function EditBook() {
  const { getBookByID } = useBooks();
  const route = useRoute();
  const { id } = route.params;

  const [book, setBook] = useState(null);

  useEffect(() => {
    getBookByID({
      id,
      onSuccess: (data) => setBook(data),
    });
  }, []);

  if (!book) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading book details...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Edit Book</Text>

      <View style={styles.card}>
        <Image source={{ uri: book.cover }} style={styles.cover} />

        <View style={styles.info}>
          <Text style={styles.label}>Book Title</Text>
          <Text style={styles.value}>{book.title}</Text>

          <Text style={styles.label}>Author</Text>
          <Text style={styles.value}>{book.name_of_author}</Text>

          <Text style={styles.label}>Price</Text>
          <Text style={styles.value}>₹ {book.price_of_book}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
  },
  heading: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 18,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    flexDirection: "row",
    alignItems: "flex-start",
  },
  cover: {
    height: 170,
    width: 120,
    borderRadius: 10,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  label: {
    fontSize: 13,
    color: "#555",
    marginTop: 8,
  },
  value: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
    marginBottom: 4,
  },
});
