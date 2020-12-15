import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";

export interface Product {
  id: string;
  sku: string;
  name: string;
  barcode: string;
  maker: string;
  category: string;
  principle: string;
  base: string;
  price: {
    price: number;
    finalPrice: number;
    taxes: number;
    discount: number;
    industryPrice: number;
    pmcPrice: number;
  };
  quantityAvailable: number;
  validUntil: number;
  imageURL: string;
}

const ProductCardComponent: React.FunctionComponent<Product> = (product) => {
  const [productQuantity, setProductQuantity] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Image
          source={{
            uri: product.imageURL,
          }}
          style={styles.image}
        ></Image>

        <View style={styles.itemDescriptionContainer}>
          <Text style={styles.itemName}>{product.name}</Text>
          <Text style={styles.itemMaker}>{product.maker}</Text>
          <Text style={styles.itemPrice}>R$ 16.92</Text>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => {
            if (productQuantity > 0) {
              setProductQuantity(productQuantity - 1);
            }
          }}
          style={styles.button}
        >
          <Ionicons name="md-remove-circle-outline" size={50} color="#5b127d" />
        </TouchableOpacity>

        <Text style={styles.productQuantity}>{productQuantity}</Text>

        <TouchableOpacity
          onPress={() => {
            if (productQuantity < product.quantityAvailable) {
              setProductQuantity(productQuantity + 1);
            }
          }}
          style={styles.button}
        >
          <Ionicons name="md-add-circle-outline" size={50} color="#5b127d" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCardComponent;
