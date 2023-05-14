import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import DetailDestinationBox from "../components/DetailDestinationBox";
import RatingBox from "../components/RatingBox";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';

function DestinationDetail(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.backButtonRow}>
        <Ionicons name="arrow-back" size={24} color="black" onPress={
          () => navigation.navigate("your-plan")
        } />
        <Text style={styles.detail}>Detail</Text>
        <Ionicons name="ellipsis-horizontal-sharp" size={24} color="black" />
      </View>
      <ScrollView>
        <DetailDestinationBox
          style={styles.detailDestinationBox}
          title={props.title}
          photo={props.photo}
          location={props.location}
        ></DetailDestinationBox>
        <RatingBox style={styles.ratingBox} rating={props.rating} ></RatingBox>
        <Text style={styles.aboutDestination}>About Destination</Text>
        <Text style={styles.description}>
          {props.description}
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  detail: {
    fontFamily: "Montserrat_700Bold",
    color: "#3a0ca3",
    fontSize: 18,
    textAlign: "center",
  },
  backButtonRow: {
    height: 30,
    flexDirection: "row",
    marginTop: "12%",
    marginBottom: "5%",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-around",
  },
  detailDestinationBox: {
    height: 250,
    width: 304,
    // marginTop: 34,
    marginLeft: 35,
  },
  ratingBox: {
    height: 82,
    width: 304,
    backgroundColor: "#fff",
    marginTop: 28,
    marginLeft: 35,
  },
  aboutDestination: {
    fontFamily: "Montserrat_700Bold",
    color: "#3a0ca3",
    fontSize: 18,
    marginTop: "5%",
    marginLeft: "5%",
  },
  description: {
    fontFamily: "Montserrat_400Regular",
    color: "#121212",
    fontSize: 12,
    marginTop: "5%",
    marginLeft: "5%",
    marginRight: "5%",
    textAlign: "justify",
    lineHeight: 20,
    letterSpacing: 0.5,
  },
});

export default DestinationDetail;
