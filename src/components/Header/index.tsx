import React from "react";
import { View, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import logoImg from "../../assets/images/logo2.png";

import styles from "./styles";

function Headercomponent() {
  const { navigate } = useNavigation();

  function handleNavigateToCartPage() {
    navigate("CartPage");
  }

  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.image} />

      <View style={styles.buttonsContainer}>
        <RectButton
          style={styles.infoButton}
          onPress={handleNavigateToCartPage}
        >
          <MaterialCommunityIcons
            name="cart-outline"
            size={24}
            color="#ebebff"
            style={styles.buttonIcon}
          ></MaterialCommunityIcons>
        </RectButton>

        <RectButton style={styles.infoButton}>
          <Feather
            name="info"
            size={24}
            color="#ebebff"
            style={styles.buttonIcon}
          ></Feather>
        </RectButton>
      </View>
    </View>
  );
}

export default Headercomponent;
