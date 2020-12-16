import React from "react";
import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Headercomponent from "../../components/Header";
import CartFooterComponent from "../../components/CartFooter";

import styles from "./styles";

function CartPage() {
  return (
    <View style={styles.container}>
      <Headercomponent />

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <Text>CART PAGE</Text>
      </ScrollView>

      <CartFooterComponent />
    </View>
  );
}

export default CartPage;
