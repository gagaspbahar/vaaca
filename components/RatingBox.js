import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function RatingBox(props) {
  return <View style={[styles.container, props.style]}>
    <View style={{
      flexDirection: "column",
      alignItems: "center",
      marginTop: 10,
      marginLeft: 10
    }}>
      <Text style={styles.titleText}>Rating</Text>
      <View style={{flexDirection: 'row', alignItems:'center', marginTop:5}}>
        <Ionicons name="star" size={24} color="#FFCC00"></Ionicons>
        <Text style={styles.ratingText}>4.7</Text>
      </View>
    </View>
    <View style={{
      flexDirection: "column",
      alignItems: "center",
      marginTop: 10,
      marginLeft: 10
    }}>
      <Text style={styles.titleLikeText}>Liked by</Text>
      <View style={{flexDirection: 'row', marginTop:5, alignItems: "flex-start"}}>
        <Text style={styles.likeText}>Gagas Bahar and 423 others</Text>
      </View>
    </View>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6E6",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  ratingText: {
    fontFamily: "Montserrat_700Bold",
    color: "#121212",
    fontSize: 18,
  },
  titleText: {
    fontFamily: "Montserrat_400Regular",
    color: "#121212",
    fontSize: 14,
  },
  likeText: {
    fontFamily: "Montserrat_400Regular",
    color: "#121212",
    fontSize: 12,
    marginTop: 5
  },
  titleLikeText: {
    fontFamily: "Montserrat_400Regular",
    color: "#121212",
    fontSize: 14,
    textAlign: "left",
  }
});

export default RatingBox;
