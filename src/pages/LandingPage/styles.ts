import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 40,
  },

  image: {
    marginTop: 120,
    width: 200,
    height: 200,
    resizeMode: "contain",
  },

  subtitle: {
    alignItems: "center",
    alignContent: "center",
    color: "#301b2c",
    fontSize: 22,
    lineHeight: 30,
    marginTop: 30,
    margin: 40,
    fontFamily: "TitilliumWeb_400Regular",
  },

  buttonContainer: {
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "center",
  },

  button: {
    height: 70,
    width: "95%",
    backgroundColor: "#3cba92",
    borderRadius: 50,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    fontFamily: "TitilliumWeb_400Regular",
    color: "#ebebff",
    fontSize: 20,
  },
});

export default styles;
