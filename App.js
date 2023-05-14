import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import SplashScreen from "./components/SplashScreen";
import { BottomNavigation, BottomNavigationTab } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import NavigationTab from "./components/NavigationTab";
// import { Icon } from 'react-native-elements';

const App = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 3000); // Change the value to adjust the length of time the splash screen is displayed
  }, []);
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        {showSplashScreen ? (
          <SplashScreen />
        ) : (
          // Render your main component here
          <View style={{ flex: 1 }}>
            <NavigationTab />
          </View>
        )}

      </View>
    </NavigationContainer>
  );
};

export default App;
