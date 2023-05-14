import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import PlanBox from "../components/PlanBox";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { ItineraryDatabase} from "../constants/props";

function YourPlans() {
  const navigation = useNavigation();
  const plans = ItineraryDatabase;

  const handlePlanPress = (props) => {
    navigation.navigate("itinerary-detail", {
      id: props.id,
    });
  }
  return (
    <View style={styles.container}>
      <View style={styles.backButtonRow}>
        <Text style={styles.detail}>Your plans</Text>
        <Ionicons name="md-download-outline" size={24} color="black" />
      </View>
      <ScrollView>
        {plans.map((plan, index) => (
          <TouchableOpacity key={index} onPress={() => handlePlanPress({
            id: plan.id,
          })}>
            <PlanBox
              key={index}
              title={plan.title}
              photo={plan.photo}
              location={plan.location}
              days={plan.days}
              type={plan.type}
              price={plan.price}
              description={plan.description}
              style={styles.planBox}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    width: "100%",
    height: "100%",
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

export default YourPlans;
