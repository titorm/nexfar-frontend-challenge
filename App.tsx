import { StatusBar } from "expo-status-bar";
import React, { Fragment } from "react";
import AppLoading from "expo-app-loading";
import DatabaseInit from "./src/databases/init";

import {
  useFonts,
  TitilliumWeb_200ExtraLight,
  TitilliumWeb_400Regular,
  TitilliumWeb_700Bold,
} from "@expo-google-fonts/titillium-web";

import AppStack from "./src/routes/AppStack";

export default function App() {
  new DatabaseInit();

  let [fontsLoaded] = useFonts({
    TitilliumWeb_200ExtraLight,
    TitilliumWeb_400Regular,
    TitilliumWeb_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Fragment>
        <StatusBar style="auto" />

        <AppStack />
      </Fragment>
    );
  }
}
