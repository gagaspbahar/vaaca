import React, { useCallback, useState } from "react";
import { Button, TextInput } from "react-native";
import { StyleSheet, View, Image, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";

function CreateItinerary(props) {
  const [modeOpen, setModeOpen] = useState(false);
  const [modeValue, setModeValue] = useState(null);
  const [modeItems, setModeItems] = useState([
    { label: "Nature", value: "nature" },
    { label: "Culinary", value: "culinary" },
    { label: "Lifestyle", value: "lifestyle" },
    { label: "All", value: "all" },
  ]);
  const [priceOpen, setpriceOpen] = useState(false);
  const [priceValue, setpriceValue] = useState(null);
  const [priceItems, setpriceItems] = useState([
    { label: "3.000k", value: "3" },
    { label: "5.000k", value: "5" },
    { label: "7.000k", value: "7" },
    { label: "10.000k", value: "10" },
  ]);

  const [city, setCity] = useState("");

  const onModeOpen = useCallback(() => {
    setpriceOpen(false);
  });

  const onPriceOpen = useCallback(() => {
    setModeOpen(false);
  });

  const handleCityChange = (text) => {
    setCity(text);
  }

  const handleDayChange = (text) => {
    setDay(text);
  }

  const navigation = useNavigation();
  const handleSubmit = () => {
    navigation.navigate("your-plan");
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <Image
          source={require("../assets/create.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <View style={styles.rect2}>
          <Text style={styles.loremIpsum}>
            Choose your preferred{"\n"}destination and style to{"\n"}get
            started!
          </Text>
          <View
            style={{
              flex: 1,
              marginHorizontal: 20,
              justifyContent: "space-evenly",
            }}
          >
            <View>
              <Text style={styles.textLabel}>City</Text>
              <TextInput placeholder=" Jogjakarta" style={styles.textInput} onChangeText={text => handleCityChange(text)} />
            </View>
            <View>
              <Text style={styles.textLabel}>Duration (days)</Text>
              <TextInput placeholder=" 3" inputMode="numeric" style={styles.textInput} onChangeText={text => handleDayChange(text)} />
            </View>
            <View style={{ zIndex: 3000, zIndexInverse:1000 }}>
              <Text style={styles.textLabel}>Mode</Text>
              <DropDownPicker
                open={modeOpen}
                value={modeValue}
                items={modeItems}
                setOpen={setModeOpen}
                setValue={setModeValue}
                setItems={setModeItems}
                zIndex={3000}
                zIndexInverse={1000}
                onOpen={onModeOpen}
                dropDownDirection="TOP"
              />
            </View>
            <View style={{ zIndex: 3001, zIndexInverse:3000 }}>
              <Text style={styles.textLabel}>Budget Range</Text>
              <DropDownPicker
                open={priceOpen}
                value={priceValue}
                items={priceItems}
                setOpen={setpriceOpen}
                setValue={setpriceValue}
                setItems={setpriceItems}
                zIndex={3000}
                zIndexInverse={1000}
                onOpen={onPriceOpen}
              />
            </View>
            <Button title="Generate" color="#f72585" onPress={handleSubmit}/>
          </View>
        </View>
      </View>
      <View style={styles.rect}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  image: {
    top: 0,
    width: "100%",
    height: "33%",
    position: "absolute",
    left: 0,
  },
  rect2: {
    top: "28%",
    left: "10%",
    width: "80%",
    height: "65%",
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(216,212,212,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 15,
    shadowOpacity: 1,
    shadowRadius: 5,
    borderRadius: 12,
  },
  loremIpsum: {
    fontFamily: "Montserrat_700Bold",
    color: "#3a0ba8",
    textAlign: "center",
    fontSize: 18,
    marginTop: "10%",
    // marginLeft: 38
  },
  imageStack: {
    width: "100%",
    height: "100%",
    marginTop: 0,
    marginLeft: 0,
  },
  rect: {
    alignContent: "center",
    alignItems: "center",
    width: 11,
    height: 3,
    backgroundColor: "#E6E6E6",
    marginTop: -717,
    marginLeft: -672,
  },
  textLabel: {
    fontSize: 14,
    fontFamily: "Montserrat_700Bold",
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 0.5,
  }
});

export default CreateItinerary;
