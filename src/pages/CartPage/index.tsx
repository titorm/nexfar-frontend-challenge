import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import ProductService from "../../services/product";
import CartService from "../../services/cart";
import Headercomponent from "../../components/Header";
import CartFooterComponent from "../../components/CartFooter";
import CartItemComponent from "../../components/CartItem";

import styles from "./styles";

function CartPage() {
  const [mounted, setMounted] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const loadData = () => {
    setMounted(true);

    const getAllProducts = ProductService.getAll();
    const getAllCartItems = CartService.getAll();
    Promise.all([getAllProducts, getAllCartItems])
      .then(([responseProducts, responseCartItems]) => {
        const products = {};

        responseProducts._array.map((product) => {
          products[product.id] = product;
        });
        let tmpTotal = 0;

        setCartItems(
          responseCartItems._array.map((cartItem) => {
            cartItem.product = products[cartItem.product_id];
            tmpTotal += cartItem.product.price_final * cartItem.quantity;
            return cartItem;
          })
        );

        setTotal(tmpTotal);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (!mounted) {
      loadData();
    }
  }, [mounted, cartItems]);

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
        {cartItems.map((item) => (
          <CartItemComponent key={item.id} item={item} refreshCart={loadData} />
        ))}
      </ScrollView>

      <CartFooterComponent total={total} />
    </View>
  );
}

export default CartPage;
