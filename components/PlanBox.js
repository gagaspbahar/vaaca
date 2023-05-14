import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function PlanBox(props) {
  // console.log(props.imagePath)
  // const photo = require(props.imagePath)
  const logoAndTitle = (logoName, text) => (
    <View
      style={{
        flexDirection: "row",
        marginHorizontal: 8,
        marginTop: 5,
      }}
    >
      <Ionicons name={logoName} />
      <Text style={{
        fontFamily: "Montserrat_400Regular",
        marginLeft: 10,

      }}>{text}</Text>
    </View>
  )

  return (
    <View style={[styles.container, props.style]}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 15,
          marginTop: 10,
        }}
      >
        <Text style={styles.title}>{props.title}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Ionicons name="pencil-outline" size={24} />
          <Ionicons name="share-outline" size={24} />
          <Ionicons name="heart-outline" size={24} />
        </View>
      </View>
      <View
        style={{
          marginHorizontal: 15,
          marginVertical: 10,
          flexDirection: "row",
        }}
      >
        <Image
          source={props.photo}
          resizeMode="cover"
          style={styles.image}
        />
        <View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flexDirection: "column",
              }}
            >
              {logoAndTitle("md-location-outline", props.location)}
              {logoAndTitle("md-calendar-outline", props.days + " days")}
            </View>
            <View
              style={{
                flexDirection: "column",
              }}
            >
              {logoAndTitle("md-information-circle-outline", props.type)}
              {logoAndTitle("pricetag-outline", props.price)}
            </View>
          </View>
          <View style={{
            marginHorizontal: 8,
          }}>
            <Text style={{
              fontFamily: "Montserrat_700Bold",
              marginTop: 10,
              color: "#3a0ca3",
            }}>Description</Text>
            <Text style={{
              fontFamily: "Montserrat_400Regular",
              fontSize: 12,
            }}>{props.description}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    width: "85%",
    marginLeft: "7.5%",
    marginRight: "7.5%",
  },
  title: {
    fontFamily: "Montserrat_700Bold",
    color: "#3a0ca3",
    fontSize: 18,
  },
  image: {
    width: 60,
    height: 100,
    borderRadius: 5,
  },
});

export default PlanBox;
