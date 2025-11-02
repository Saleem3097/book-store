import axios from "axios";
import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [bookList, setBookList] = useState([]);
  const [getAll, setGetAll] = useState(false);
  const bookData = "https://69072138b1879c890ed8e1f4.mockapi.io/books";

  const getListOfBooks = async () => {
    try {
      Alert.alert("Fetching book list...");
      const response = await axios.get(bookData);
      console.log(JSON.stringify(response.data, null, 3));
      setBookList(response.data);
      setGetAll(!getAll);
    } catch (error) {
      console.log("Error fetching books:", error);
    }
  };

  const getBookByID = async () => {
    try {
      const response = await axios.get(`${bookData}/4`);
      console.log(JSON.stringify(response.data, null, 3));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBookByID = async () => {
    try {
      await axios.delete(`${bookData}/11`);
      Alert.alert("Book deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const updateBookByID = async () => {
    try {
      await axios.put(`${bookData}/2`, body);
      Alert.alert("Book Updated Successfully");
      getListOfBooks();
    } catch (error) {
      console.log(error);
    }
  };

  const body = {
    name_of_author: "Brianna West",
    cover:
      "data:image/png;base64,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",
    price_of_book: "999",
    email_of_seller: "brianna@hotmail.com",
  };

  const createBook = async () => {
    await axios.post(bookData, body);
    getListOfBooks();
    Alert.alert("Book created successfully");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ padding: 10 }}>
        <Button title="Get All the Books" onPress={getListOfBooks} />
        <Button title="Get Book by ID" onPress={getBookByID} />
        <Button title="Delete Book by ID" onPress={deleteBookByID} />
        <Button title="Create a Book" onPress={createBook} />
        <Button title="Update the Book" onPress={updateBookByID} />
      </View>

      {getAll && (
        <FlatList
          data={bookList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 20, alignItems: "center" }}>
              <Image
                style={{
                  height: 150,
                  width: 200,
                  resizeMode: "cover",
                  borderRadius: 8,
                }}
                source={{ uri: item.cover }}
              />
              <Text>{item.name_of_author}</Text>
              <Text>Rs {item.price_of_book}</Text>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}
