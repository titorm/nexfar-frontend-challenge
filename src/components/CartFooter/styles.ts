import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "12%",
    width: "100%",
    backgroundColor: "#3cba92",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  descriptionContainer: {},

  descriptionText: {
    marginTop: 10,
    marginLeft: 20,
    fontFamily: "TitilliumWeb_700Bold",
    color: "#ebebff",
    fontSize: 18,
  },

  buyButton: {
    height: 50,
    width: 80,
    borderRadius: 10,
    marginTop: 20,
    marginRight: 20,
    backgroundColor: "#ebebff",
    alignItems: "center",
    justifyContent: "center",
  },

  buyButtonText: {
    fontFamily: "TitilliumWeb_700Bold",
    color: "#3cba92",
    fontSize: 16,
  },
});

export default styles;
