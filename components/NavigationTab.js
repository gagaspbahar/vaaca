import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import CreateItinerary from "../views/CreateItinerary";
import UnderConstruction from "../views/UnderConstruction";
import DestinationDetail from "../views/DestinationDetail";
import YourPlans from "../views/YourPlans";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <UnderConstruction />
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

const TemporaryScreen = () => {
  const props = {
    title: "Museum Ullen Sentalu",
    photo: require("../assets/destination_placeholder.png"),
    location: "Jl. Boyong No.KM 25, Kaliurang, Hargobinangun",
    rating: 4.7,
    description:
      "Menapakkan kaki di kawasan Museum Ullen Sentalu terasa balutan hawa sejuk (15-25° Celcius) dan suasana hening yang menyatu dengan alam pegunungan disekitranya yang sekaligus memberikan rasa damai serta khidmat. Area seluas 1,2 hektar yang dikembangkan secara bertahap tersebut bernama Dalem Kaswargan atau Rumah Surga, dimana Museum Ullen Sentalu berada. Jalan masuk menuju ruang pamer museum maupun artshop dan restoran berupa kelokan, undakan, serta labirin akan memberikan nuansa nostalgia, perenungan dan keindahan. Beberapa bagian bangunan dan unsur yang melengkapinya, seperti gapura, dinding tembok, taman, kolam, mencerminkan keagungan budaya leluhur yang sudah ada sejak masa silam. Berbagai jenis unsur bangunan Jawa terlihat pada layout dan struktur bangunan bergaya Indis dan post-mo yang bersatu-padu menciptakan harmoni secara menakjubkan. Koleksi berupa lukisan dan foto foto tokoh sejarah budaya Mataram Islam, kain batik vorstenlanden, karya sastra, arca arca kebudayaan Hindu Buddha, dan koleksi etnografi era Mataram Islam. Itu membingkai kisah sosial ekonomi politik seni sejarah dan budaya Jawa, terutama kisah para putri di kraton Mataram yang tidak banyak dikisahkan kepada masyarakat awam.",
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <DestinationDetail
        title={props.title}
        photo={props.photo}
        location={props.location}
        rating={props.rating}
        description={props.description}
      />
    </View>
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
        component={HomeScreen}
      />
      <Tab.Screen
        name="create"
        options={{ title: "Create", headerShown: false }}
        component={CreateScreen}
      />
      <Tab.Screen
        name="your-plan"
        options={{ title: "Your Plans", headerShown: false }}
        component={YourPlanScreen}
      />
      <Tab.Screen
        name="profile"
        options={{ title: "Profile", headerShown: false }}
        component={ProfileScreen}
      />
      <Tab.Screen
        name="temporary"
        options={{ title: "Temporary", headerShown: false }}
        component={TemporaryScreen}
      />
    </Tab.Navigator>
  );
};

export default NavigationTab;
