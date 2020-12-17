import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import styles from "./styles";
import CartService from "../../services/cart";

const CartItemComponent = (props: any) => {
  const { item, refreshCart } = props;
  const handleRemoveItem = () => {
    CartService.deleteByProductId(item.product_id);
    refreshCart();
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemDescriptionContainer}>
        <View style={styles.itemNameContainer}>
          <Text style={styles.itemName}>{item.product.name}</Text>
        </View>

        <View style={styles.itemPriceContainer}>
          <Text style={styles.itemQuantity}>{`${item.quantity}un`}</Text>
          <View>
            <Text style={styles.itemValue}>
              Total: R$ {(item.product.price_final * item.quantity).toFixed(2)}
            </Text>
            <Text style={styles.itemTaxes}>
              Impostos: R${" "}
              {(item.product.price_taxes * item.quantity).toFixed(2)}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.removeItemButton}
            onPress={handleRemoveItem}
          >
            <MaterialIcons name="delete-forever" size={22} color="#f62854" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItemComponent;
