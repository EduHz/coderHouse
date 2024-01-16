import {
  StyleSheet,
  Text,
  Image,
  useWindowDimensions,
  Pressable,
} from "react-native";
import { colors } from "../Global/colors";
import { useDispatch } from "react-redux";
import { setProductSelected } from "../features/shop/shopSlice";

const CustomProductItem = ({ item, navigation, route }) => {
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        dispatch(setProductSelected(item.id));
        navigation.navigate("Product", { id: item.id });
      }}
    >
      <Text style={width > 350 ? styles.text : styles.textMin}>
        {item.title}
      </Text>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: item.thumbnail }}
      />
    </Pressable>
  );
};

export default CustomProductItem;

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 120, // Increased height for better visibility
    backgroundColor: colors.blue, // Changed background color
    marginHorizontal: "10%",
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10, // Increased border radius for a softer look
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20, // Increased gap for better spacing
  },
  text: {
    width: "60%",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Roboto", // Changed font family
    color: colors.darkGray, // Changed text color
  },
  textMin: {
    width: "60%",
    textAlign: "center",
    fontSize: 15,
    fontFamily: "Roboto", // Changed font family
    color: colors.darkGray, // Changed text color
  },
  image: {
    minWidth: 90,
    height: 90,
    width: "30%",
    borderRadius: 5, // Added border radius to the image
  },
});
