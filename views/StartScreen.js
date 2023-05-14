import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Button } from "react-native-elements";

function StartScreen({setStartScreen}) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/start.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Button title="Get started" buttonStyle={{
        backgroundColor: "#f72585",
      }}
      containerStyle={{
        width: "80%",
        height: 50,
        marginTop: 10,
        marginLeft: "10%"
      }}
      onPress={() => {
        setStartScreen(false);
      }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4144cb"
  },
  image: {
    width: 414,
    height: 673,
    alignSelf: "center"
  },
  rect: {
    width: 282,
    height: 45,
    backgroundColor: "#f72585",
    marginTop: 10,
    marginLeft: 47
  }
});

export default StartScreen;
