import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },

  itemDescriptionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  itemName: {
    fontFamily: "TitilliumWeb_400Regular",
    fontSize: 14,
    marginBottom: 10,
    color: "#5b127d",
    marginRight: 20,
  },

  itemPriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  itemQuantity: {
    fontFamily: "TitilliumWeb_400Regular",
    fontSize: 14,
    marginBottom: 10,
    color: "#5b127d",
    marginRight: 10,
  },

  itemValue: {
    fontFamily: "TitilliumWeb_400Regular",
    fontSize: 14,
    marginBottom: 10,
    color: "#5b127d",
    marginRight: 10,
  },

  removeItemButton: {},
});

export default styles;
