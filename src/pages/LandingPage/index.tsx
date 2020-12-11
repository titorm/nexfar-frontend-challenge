import React from "react";
import { View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import styles from "./styles";

import logoImg from "../../assets/images/logo.png";

function LandingPage() {
  const { navigate } = useNavigation();

  function handleNavigateToProductsPage() {
    navigate("ProductsPage");
  }

  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.image}></Image>

      <Text style={styles.subtitle}>Cart Technical Challenge</Text>
      <View style={styles.buttonContainer}>
        <RectButton
          onPress={handleNavigateToProductsPage}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </RectButton>
      </View>
    </View>
  );
}

export default LandingPage;
