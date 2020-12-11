import React from "react";
import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Headercomponent from "../../components/Header";

import styles from "./styles";

function ProductsPage() {
  return (
    <View style={styles.container}>
      <Headercomponent />

      <Text>PRODUCTS PAGE</Text>
    </View>
  );
}

export default ProductsPage;
