import axios from "axios";
import { useState } from "react";
import { Button, FlatList, Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [bookList, setBookList] = useState([]);
  const [getAll, setGetAll] = useState(false);
  const bookData = "https://69072138b1879c890ed8e1f4.mockapi.io/books";
  const getListOfBooks = async () => {
    try {
      const response = await axios.get(bookData);
      console.log(JSON.stringify(response.data, null, 3));
      setBookList(response.data);
      setGetAll(getAll ? !getAll : true);
    } catch (error) {
      console.log(error);
    }
  };
  const getBookByID = async () => {
    try {
      const response = await axios.get(bookData + "/5");
      console.log(JSON.stringify(response.data, null, 3));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ margin: 50 }}>
        <Text>Hi there</Text>
        <Button title="Get All the Books" onPress={getListOfBooks} />
        <Button title="Get Book by its ID" onPress={getBookByID} />
        <View style={{ margin: 50 }}>
          {getAll && (
            <FlatList
              data={bookList}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View>
                  <Image
                    style={{ height: 150, width: 200 }}
                    source={{ uri: item.cover }}
                  />
                  <Text>{item.name_of_author}</Text>
                  <Text>Rs {item.price_of_book}</Text>
                </View>
              )}
            />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "tomato",
    alignItems: "center",
  },
});
