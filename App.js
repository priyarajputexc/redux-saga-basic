import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import Home from "./src/components/Home";
import Loading from "./src/components/Loading";
import Users from "./src/components/Users";
import store from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Home />
        <Loading />
        <Users />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    marginHorizontal: 5,
    marginVertical: 50,
  },
});
