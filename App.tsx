import axios from "axios";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const endPointURL = "https://69072138b1879c890ed8e1f4.mockapi.io/books";

  const getListOfBooks = async () => {
    const response = await axios.get(endPointURL);
    console.log(JSON.stringify(response.data, null, 3));
  };

  return (
    <View style={styles.container}>
      <Text>Lets create a booking app baby</Text>
      <Button title="Get list of books" onPress={getListOfBooks} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
