import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import DetailDestinationBox from "../components/DetailDestinationBox";
import ReviewBox  from "../components/ReviewBox";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ReviewsDatabase } from "../constants/props";

function Community() {
  const navigation = useNavigation();
  const plans = ReviewsDatabase
  return (
    <View style={styles.container}>
      <View style={styles.backButtonRow}>
        <Text style={styles.detail}>Community</Text>
        <Ionicons name="md-download-outline" size={24} color="black" />
      </View>
      <ScrollView>
        {
          plans.map((plan, index) => (
            <ReviewBox
              key={index}
              title={plan.title}
              photo={plan.photo}
              location={plan.location}
              days={plan.days}
              type={plan.type}
              price={plan.price}
              description={plan.description}
              likes={plan.likes}
              duplicates={plan.duplicates}
              reviewerName={plan.reviewerName}
              reviewerFollowers={plan.reviewerFollowers}
              reviewerPhoto={plan.reviewerPhoto}
              reviewContent={plan.reviewContent}
              style={styles.planBox}
            />
          ))
        }
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
    marginTop: 5,
    textAlign: "left",
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
  planBox: {
    // height: 250,
    // width: 304,
    marginTop: 10,
    // marginLeft: 35,
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

export default Community;
