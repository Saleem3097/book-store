import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { FC } from "react";

interface BookCardProps {
  title: String;
  price: String;
  author: String;
  image: { uri: string };
  onEdit: () => void;
}
const BookCard: FC<BookCardProps> = ({
  title,
  price,
  author,
  image,
  onEdit,
}) => {
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
        <TouchableOpacity style={styles.buttons} onPress={onEdit}>
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
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: 10,
    alignItems: "center", // ✅ add this
    justifyContent: "space-between", // ✅ add this
  },
  cover: {
    width: 80, // fixed width so it doesn't collapse
    height: 120, // fixed height
    borderRadius: 6,
    resizeMode: "cover",
    flexShrink: 0, // prevents image from shrinking when space is tight
  },
  bookDetails: {
    marginLeft: 10,
    flex: 1, // ✅ this allows the text section to take available space and not push out the buttons
  },
  functionalContainer: {
    flexDirection: "row",
    alignItems: "center", // ✅ ensures icons align properly
  },
  buttons: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginLeft: 10, // ✅ space fixed
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BookCard;
