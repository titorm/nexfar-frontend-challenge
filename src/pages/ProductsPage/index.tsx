import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import ProductService from "../../services/product";
import Headercomponent from "../../components/Header";
import ProductCardComponent, { Product } from "../../components/ProductCard";

import styles from "./styles";

function ProductsPage() {
  const [mounted, setMounted] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    function loadProducts() {
      setMounted(true);

      ProductService.getAll().then((response: any) => {
        setProducts(response._array);
      }),
        (error: any) => console.log(error);
    }

    if (!mounted) {
      loadProducts();
    }
  }, [mounted, products]);

  return (
    <View style={styles.container}>
      <Headercomponent />

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {products.map((product: Product) => (
          <ProductCardComponent key={product.id} {...product} />
        ))}
      </ScrollView>
    </View>
  );
}

export default ProductsPage;
