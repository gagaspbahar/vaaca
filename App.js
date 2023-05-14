import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import SplashScreen from "./components/SplashScreen";
import { Header, Icon } from "@rneui/native";
import { BottomNavigation, BottomNavigationTab } from '@rneui/native';
import { Icon } from 'react-native-elements';


const App = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 3000); // Change the value to adjust the length of time the splash screen is displayed
  }, []);

  const renderView = (index) => {
    switch (index) {
      case 0:
        return (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text>Home Screen</Text>
          </View>
        );
      case 1:
        return (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text>Settings Screen</Text>
          </View>
        );
      case 2:
        return (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text>Profile Screen</Text>
          </View>
        );
      default:
        return null;
    }
  };

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onTabSelect = (index) => {
    setSelectedIndex(index);
  };

  return (
    <View style={{ flex: 1 }}>
      {showSplashScreen ? (
        <SplashScreen />
      ) : (
        // Render your main component here
        <Text>Hello, world!</Text>
      )}

      {renderView(selectedIndex)}
      <BottomNavigation
        selectedIndex={selectedIndex}
        onSelect={onTabSelect}
        style={{ backgroundColor: "#3D6DCC" }}
      >
        {navigationTabs.map(renderTab)}
      </BottomNavigation>
    </View>
  );
};

export default App;
