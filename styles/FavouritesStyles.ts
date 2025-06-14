import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  item: {
    marginTop:20,
    padding: 10,
    marginHorizontal: 16, // equal space left and right
    marginVertical: 10, // equal space top and bottom
    backgroundColor: "#ffffff",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 2,
    alignSelf: "center", // centers item inside FlatList/Grid
  },

  image: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },
});
