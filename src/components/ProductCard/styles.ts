import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 380,
    height: 300,
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
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  image: {
    marginTop: 10,
    marginLeft: 10,
    width: 100,
    height: 200,
    resizeMode: "cover",
  },

  itemDescriptionContainer: {
    marginLeft: 20,
    marginTop: 50,
    marginRight: 30,
    maxHeight: 30,
    maxWidth: 200,
  },

  itemName: {
    fontFamily: "TitilliumWeb_400Regular",
    fontSize: 16,
    marginBottom: 10,
    color: "#5b127d",
  },

  itemMaker: {
    fontFamily: "TitilliumWeb_400Regular",
    fontSize: 14,
    marginBottom: 10,
    color: "#000",
  },

  itemPrice: {
    fontFamily: "TitilliumWeb_700Bold",
    fontSize: 20,
    color: "#ffad5c",
  },

  buttonsContainer: {
    flexDirection: "row",
    paddingTop: 20,
    paddingLeft: 20,
  },

  button: {
    marginLeft: 10,
    borderRadius: 100,
  },

  productQuantity: {
    marginTop: 10,
    marginLeft: 10,
    fontFamily: "TitilliumWeb_400Regular",
    color: "#301b2c",
    fontSize: 22,
  },

  unavailable: {
    fontFamily: "TitilliumWeb_400Regular",
    color: "#5b127d",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 100,
  },
});

export default styles;
