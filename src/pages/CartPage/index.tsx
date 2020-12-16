import React from "react";
import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Headercomponent from "../../components/Header";
import CartFooterComponent from "../../components/CartFooter";
import CartItemComponent from "../../components/CartItem";

import styles from "./styles";

function CartPage() {
  return (
    <View style={styles.container}>
      <Headercomponent />

      <Text style={styles.productsText}>Produtos escolhidos:</Text>

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <CartItemComponent />
      </ScrollView>

      <CartFooterComponent />
    </View>
  );
}

export default CartPage;
