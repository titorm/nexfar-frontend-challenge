import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import styles from "./styles";

function CartItemComponent() {
  return (
    <View style={styles.container}>
      <View style={styles.itemDescriptionContainer}>
        <View style={styles.itemNameContainer}>
          <Text style={styles.itemName}>HAAR INTERN C/60CPR-S/AC</Text>
        </View>

        <View style={styles.itemPriceContainer}>
          <Text style={styles.itemQuantity}>100un</Text>
          <View>
            <Text style={styles.itemValue}>Total: R$ 180.00</Text>
            <Text style={styles.itemTaxes}>Impostos: R$ 60.00</Text>
          </View>

          <TouchableOpacity style={styles.removeItemButton}>
            <MaterialIcons name="delete-forever" size={22} color="#f62854" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default CartItemComponent;
