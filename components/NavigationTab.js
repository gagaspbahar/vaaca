import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import CreateItinerary from '../views/CreateItinerary';
import UnderConstruction from '../views/UnderConstruction';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <UnderConstruction />
    </View>
  );
};

const YourPlanScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <UnderConstruction />
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <UnderConstruction />
    </View>
  );
};


const CreateScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CreateItinerary />
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

          if (route.name === 'community') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'your-plan') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'create') {
            iconName = focused ? 'pencil' : 'pencil-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}
      
    >
      <Tab.Screen name="community" options={{title: "Community", headerShown:false}} component={HomeScreen} />
      <Tab.Screen name="create" options={{title: "Create", headerShown:false}} component={CreateScreen} />
      <Tab.Screen name="your-plan" options={{title: "Your Plan", headerShown:false}} component={YourPlanScreen} />
      <Tab.Screen name="profile" options={{title: "Profile", headerShown:false}} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default NavigationTab;
