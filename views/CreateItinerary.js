import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
// import MaterialStackedLabelTextbox from ;

function CreateItinerary(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <Image
          source={require("../assets/create.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <View style={styles.rect2}>
          <Text style={styles.loremIpsum}>
            Choose your preferred{"\n"}destination and style to{"\n"}get
            started!
          </Text>
        </View>
      </View>
      <View style={styles.rect}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  image: {
    top: 0,
    width: "100%",
    height: "33%",
    position: "absolute",
    left: 0
  },
  rect2: {
    top: "28%",
    left: "10%",
    width: "80%",
    height: "65%",
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(216,212,212,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 15,
    shadowOpacity: 1,
    shadowRadius: 5,
    borderRadius: 12
  },
  loremIpsum: {
    fontFamily: "Montserrat_700Bold",
    color: "#3a0ba8",
    textAlign: "center",
    fontSize: 18,
    marginTop: "10%",
    // marginLeft: 38
  },
  imageStack: {
    width: "100%",
    height: "100%",
    marginTop: 0,
    marginLeft: 0
  },
  rect: {
    alignContent: "center",
    alignItems: "center",
    width: 11,
    height: 3,
    backgroundColor: "#E6E6E6",
    marginTop: -717,
    marginLeft: -672
  }
});

export default CreateItinerary;
