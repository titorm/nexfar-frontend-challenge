import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Headercomponent from "../../components/Header";
import ProductCardComponent, { Product } from "../../components/ProductCard";

import styles from "./styles";

function ProductsPage() {
  const products = require("../../data/products.json");

  return (
    <View style={styles.container}>
      <Headercomponent />

      <ScrollView
        style={styles.productsList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {products.map((product: Product) => {
          return <ProductCardComponent key={product.id} {...product} />;
        })}
      </ScrollView>
    </View>
  );
}

export default ProductsPage;
