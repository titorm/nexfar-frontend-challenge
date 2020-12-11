import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LandingPage from "../pages/LandingPage";
import ProductsPage from "../pages/ProductsPage";
import CartPage from "../pages/CartPage";

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="LandingPage" component={LandingPage}></Screen>
        <Screen name="ProductsPage" component={ProductsPage}></Screen>
        <Screen name="CartPage" component={CartPage}></Screen>
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
