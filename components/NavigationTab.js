import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import CreateItinerary from "../views/CreateItinerary";
import UnderConstruction from "../views/UnderConstruction";
import DestinationDetail from "../views/DestinationDetail";
import YourPlans from "../views/YourPlans";
import Community from "../views/Community";
import ItineraryDetail from "../views/ItineraryDetail";
import { DestinationsDatabase } from "../constants/props";

const Tab = createBottomTabNavigator();

const CommunityScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Community />
    </View>
  );
};

const YourPlanScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <YourPlans />
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <UnderConstruction />
    </View>
  );
};

const CreateScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <CreateItinerary />
    </View>
  );
};


const DestinationDetailScreen = ({route, navigation}) => {
  const props = DestinationsDatabase;
  console.log(props)
  const { id } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <DestinationDetail
        title={props[id].title}
        photo={props[id].photo}
        location={props[id].location}
        rating={props[id].rating}
        description={props[id].description}
        before="your-plan"
      />
    </View>
  );
};

const ItineraryDetailScreen = ({route, navigation}) => {
  const {id} = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ItineraryDetail id={id} />
    </View>
  );
};

const PlanStack = createStackNavigator();

const PlanStackScreen = () => {
  return (
    <PlanStack.Navigator>
      <PlanStack.Screen
        name="your-plans"
        options={{ title: "Your Plans", headerShown: false }}
        component={YourPlanScreen}
      />
      <PlanStack.Screen
        name="itinerary-detail"
        component={ItineraryDetailScreen}
        options={{ title: "Itinerary Detail", headerShown: false }}
      />
      <PlanStack.Screen
        name="destination-detail"
        component={DestinationDetailScreen}
        options={{ title: "Destination Detail", headerShown: false }}
      />
    </PlanStack.Navigator>
  );
};

const NavigationTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="create"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "community") {
            iconName = focused ? "people" : "people-outline";
          } else if (route.name === "profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "your-plan") {
            iconName = focused ? "calendar" : "calendar-outline";
          } else if (route.name === "create") {
            iconName = focused ? "pencil" : "pencil-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="community"
        options={{ title: "Community", headerShown: false }}
        component={CommunityScreen}
      />
      <Tab.Screen
        name="create"
        options={{ title: "Create", headerShown: false }}
        component={CreateScreen}
      />
      <Tab.Screen
        name="your-plan"
        options={{ title: "Your Plans", headerShown: false }}
        component={PlanStackScreen}
      />
      <Tab.Screen
        name="profile"
        options={{ title: "Profile", headerShown: false }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default NavigationTab;
