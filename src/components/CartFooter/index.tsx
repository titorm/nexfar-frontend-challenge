import React from "react";
import { Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import styles from "./styles";

function CartFooterComponent(props) {
  const { total, taxes } = props;

  return (
    <View style={styles.container}>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>Total: R$ {total.toFixed(2)}</Text>
        <Text style={styles.descriptionText}>
          Impostos: R$ {taxes.toFixed(2)}
        </Text>
      </View>

      <RectButton style={styles.buyButton}>
        <Text style={styles.buyButtonText}>Comprar</Text>
      </RectButton>
    </View>
  );
}

export default CartFooterComponent;
