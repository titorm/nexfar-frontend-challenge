import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";
import CartService from "../../services/cart";
import { CartModel } from "../../models/cart";

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

  useEffect(() => {
    updateCartItem();
  }, [productQuantity]);

  const handleQuantityDecrement = () => {
    if (productQuantity > 0) {
      setProductQuantity(productQuantity - 1);
    }
  };

  const handleQuantityIncrement = () => {
    if (productQuantity < product.quantity_available) {
      setProductQuantity(productQuantity + 1);
    }
  };

  const updateCartItem = () => {
    const item: CartModel = new CartModel();
    item.quantity = productQuantity;
    item.product_id = product.id;

    if (productQuantity === 0) {
      CartService.deleteByProductId(product.id);
      return;
    }

    CartService.findByProductId(product.id).then((response) => {
      if (response.length === 0) {
        CartService.create(item);
        return;
      }

      CartService.updateByProductId(item);
    });
  };

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
            onPress={handleQuantityDecrement}
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
            onPress={handleQuantityIncrement}
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
