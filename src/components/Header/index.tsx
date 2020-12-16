import React from "react";
import { View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import logoImg from "../../assets/images/logo2.png";

import styles from "./styles";

function Headercomponent() {
  const { navigate, goBack } = useNavigation();

  function handleNavigateToCartPage() {
    navigate("CartPage");
  }

  function handleGoBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Feather
          name="arrow-left"
          size={24}
          color="#ebebff"
          style={styles.backButton}
          onPress={handleGoBack}
        />
      </TouchableOpacity>
      <Image source={logoImg} style={styles.image} />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.infoButton}
          onPress={handleNavigateToCartPage}
        >
          <MaterialCommunityIcons
            name="cart-outline"
            size={24}
            color="#ebebff"
            style={styles.buttonIcon}
          ></MaterialCommunityIcons>
        </TouchableOpacity>

        <TouchableOpacity style={styles.infoButton}>
          <Feather
            name="info"
            size={24}
            color="#ebebff"
            style={styles.buttonIcon}
          ></Feather>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Headercomponent;
