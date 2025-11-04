import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { FC } from "react";

interface BookCardProps {
  title: String;
  price: String;
  author: String;
  image: { uri: string };
}
const BookCard: FC<BookCardProps> = ({ title, price, author, image }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.cover} />
      <View style={styles.bookDetails}>
        <Text>{title}</Text>
        <Text>{author}</Text>
        <Text>Rs {price}</Text>
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
