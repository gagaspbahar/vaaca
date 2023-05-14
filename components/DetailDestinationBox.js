import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function DetailDestinationBox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.imageStack}>
        <Image
          source={props.photo}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.location}>
        {props.location}
      </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5
    
  },
  image: {
    width: "100%",
    height: "100%",
    marginTop: "5%"
  },
  title: {
    marginTop: -15,
    textAlign: "left",
    fontFamily: "Montserrat_700Bold",
    color: "#121212"
  },
  ellipse: {
    top: 177,
    left: 213,
    width: 39,
    height: 40,
    position: "absolute"
  },
  imageStack: {
    width: 265,
    height: 218,
    marginTop: "-7%",
    marginHorizontal: "7%",
    alignContent: "center",
    // alignItems: "center",

  },
  location: {
    fontFamily: "Montserrat_700Bold",
    color: "#121212",
    fontSize: 10,
    marginTop: 5,
    // marginLeft: 19
  }
});

export default DetailDestinationBox;
