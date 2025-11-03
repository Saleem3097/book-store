import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const BookCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://m.media-amazon.com/images/I/61rFpYUhzzL._AC_UF1000,1000_QL80_.jpg",
        }}
        style={styles.cover}
      />
      <View style={styles.bookDetails}>
        <Text>Soul Tiles</Text>
        <Text>Darren Johns</Text>
        <Text>Rs 850</Text>
      </View>
      <View style={styles.functionalContainer}>
        <TouchableOpacity style={styles.buttons}>
          <MaterialCommunityIcons
            name="delete-empty-outline"
            size={30}
            color="red"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <FontAwesome5 name="edit" size={22} color="blue" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: 10,
  },
  cover: {
    height: 120,
    width: "25%",
  },
  bookDetails: {
    marginLeft: 10,
  },
  functionalContainer: {
    flexDirection: "row",
    left: "20%",
    height: 50,
    width: 100,
    justifyContent: "flex-end",
  },
  buttons: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BookCard;
