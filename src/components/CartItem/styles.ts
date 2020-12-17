import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    height: 80,
    width: 380,
    marginTop: 10,
    marginLeft: -10,
    marginBottom: 5,
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: "#ffffff",
    borderColor: "#c4c4c4",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },

  itemDescriptionContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  itemNameContainer: {
    maxWidth: "50%",
  },

  itemName: {
    fontFamily: "TitilliumWeb_400Regular",
    fontSize: 14,
    marginBottom: 10,
    color: "#5b127d",
    marginRight: 10,
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

  itemTaxes: {
    fontFamily: "TitilliumWeb_400Regular",
    fontSize: 12,
    marginBottom: 10,
    color: "#5b127d",
  },

  removeItemButton: {},
});

export default styles;
