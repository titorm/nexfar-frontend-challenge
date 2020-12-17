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
  price: number;
  price_final: number;
  price_taxes: number;
  price_discount: number;
  price_industry: number;
  price_pmc: number;
  quantity_available: number;
  validUntil: number;
  image_url: string;
}

const ProductCardComponent: React.FunctionComponent<Product> = (product) => {
  const [productQuantity, setProductQuantity] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Image
          source={{
            uri: product.image_url,
          }}
          style={styles.image}
        ></Image>

        <View style={styles.itemDescriptionContainer}>
          <Text style={styles.itemName}>{product.name}</Text>
          <Text style={styles.itemMaker}>{product.maker}</Text>
          <Text style={styles.itemPrice}>R$ {product.price_final}</Text>
        </View>
      </View>

      {product.quantity_available > 0 && (
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => {
              if (productQuantity > 0) {
                setProductQuantity(productQuantity - 1);
              }
            }}
            style={styles.button}
          >
            <Ionicons
              name="md-remove-circle-outline"
              size={50}
              color="#5b127d"
            />
          </TouchableOpacity>

          <Text style={styles.productQuantity}>{productQuantity}</Text>

          <TouchableOpacity
            onPress={() => {
              if (productQuantity < product.quantity_available) {
                setProductQuantity(productQuantity + 1);
              }
            }}
            style={styles.button}
          >
            <Ionicons name="md-add-circle-outline" size={50} color="#5b127d" />
          </TouchableOpacity>
        </View>
      )}

      {product.quantity_available === 0 && (
        <Text style={styles.unavailable}>Produto indisponível</Text>
      )}
    </View>
  );
};

export default ProductCardComponent;
