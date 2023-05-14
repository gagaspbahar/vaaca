import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function UnderConstruction() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/construction.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Text style={styles.oops}>Oops!</Text>
      <Text style={styles.underConstruction}>Under Construction</Text>
      <Text style={styles.underConstructionSubtitle}>
        This page is under construction.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 400,
    height: 400,
    marginTop: 183
  },
  oops: {
    fontFamily: "Montserrat_700Bold",
    color: "#3a0ca3",
    fontSize: 24,
    marginTop: -489,
    alignSelf: "center"
  },
  underConstruction: {
    fontFamily: "Montserrat_700Bold",
    color: "#3a0ca3",
    fontSize: 18,
    marginTop: 481,
    alignSelf: "center"
  },
  underConstructionSubtitle: {
    fontFamily: "Montserrat_400Regular",
    color: "#3a0ca3",
    fontSize: 18,
    marginTop: 12,
    alignSelf: "center"
  }
});

export default UnderConstruction;
