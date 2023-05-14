import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import CreateItinerary from '../views/CreateItinerary';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
};

const YourPlanScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
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
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'home') {
            iconName = focused ? 'home' : 'home-outline';
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
      <Tab.Screen name="home" options={{title: "Home", headerShown:false}} component={HomeScreen} />
      <Tab.Screen name="create" options={{title: "Create", headerShown:false}} component={CreateScreen} />
      <Tab.Screen name="your-plan" options={{title: "Your Plan", headerShown:false}} component={YourPlanScreen} />
      <Tab.Screen name="profile" options={{title: "Profile", headerShown:false}} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default NavigationTab;
