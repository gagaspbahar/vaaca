import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Divider } from "react-native-elements";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { DestinationDetailProps } from "../constants/props";

function ItineraryDetail(props) {

  const [selectedDay, setSelectedDay] = useState(0);

  const DayComponent = (props) => {
    let days = [];
    const [selected, setSelected] = useState(0);
    const handleDayPress = (i) => {
      setSelected(i);
      setSelectedDay(i);
    };

    useEffect(() => {
      
    }, [selected])

    for (let i = 0; i < props.day; i++) {
      days.push(
        <TouchableOpacity
          style={{
            backgroundColor: selected == i ? "#d9d9d9" : "white",
            borderRadius: 5,
            paddingHorizontal: 10,
            paddingVertical: 12,
          }}
          onPress={() => handleDayPress(i)}
          key={i}
        >
          <Text
            style={{
              color: selected == i ? "#3a0ca3" : "#d9d9d9",
            }}
          >
            Day {i+1}
          </Text>
        </TouchableOpacity>
      );
    }
    return <View>{days}</View>;
  };

  const DestinationComponent = (props) => {
    let destinations = [];

    const handleItineraryPress = (props) => {
      navigation.navigate("destination-detail", {
        // title: "test",
        // photo: props.photo,
        // location: props.location,
        // rating: props.rating,
        // description: props.description,
        id: props.id,
      });
    }

    for (let i = 0; i < props.destinations.length; i++) {
      if(selectedDay == props.destinations[i].day - 1) {
        destinations.push(
          <TouchableOpacity key={i} onPress={
            () => handleItineraryPress({
              id: props.destinations[i].id,
            })
          }>
            <Image
              source={require("../assets/destination_placeholder.png")}
              style={styles.destinationImage}
            />
            <Text style={{
              fontFamily: "Montserrat_700Bold",
            }}>{props.destinations[i].name}</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Ionicons name="location" size={18} />
              <Text style={{
                marginLeft: 5,
                fontFamily: "Montserrat_400Regular"
              }}>{props.destinations[i].location}</Text>
            </View>
            <Divider
              width={2}
              style={{
                marginVertical: 10,
              }}
            />
          </TouchableOpacity>
        );
      }
    }

    return (
      <View
        style={{
          flex: 1,
        }}
      >
        {destinations}
      </View>
    );
  };

  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "10%",
          marginBottom: "5%",
          marginHorizontal: 30,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color="black"
            onPress={() => navigation.goBack()}
          />
          <Text
            style={{
              fontFamily: "Montserrat_700Bold",
              color: "#3a0ca3",
              fontSize: 18,
              marginLeft: 10,
            }}
          >
            Itinerary Name
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Ionicons
            name="md-return-up-forward-outline"
            size={24}
            color="black"
            style={{
              marginRight: 10,
            }}
          />
          <Ionicons name="md-bookmark-outline" size={24} />
        </View>
      </View>
      <View
        style={{ backgroundColor: "#FFFFFF", borderRadius: 20, height: "100%" }}
      >
        <ScrollView
          style={{
            marginHorizontal: 30,
            marginBottom: "10%",
          }}
        >
          <Text
            style={{
              fontFamily: "Montserrat_700Bold",
              color: "#3a0ca3",
              fontSize: 18,
              marginVertical: 20,
              textAlign: "center",
            }}
          >
            Our itinerary plan for you
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                marginRight: 10,
              }}
            >
              {DayComponent({ day: 3 })}
            </View>
            <Divider orientation="vertical" width={2} />
            <View
              style={{
                marginLeft: 10,
              }}
            >
              {DestinationComponent({ destinations: [
                {
                  id: 0,
                  name: "Museum Ullen Sentalu",
                  location: "Jl. Boyong No.KM 25, Kaliurang, Hargobinangun",
                  day: 1
                },
                {
                  id: 1,
                  name: "Museum Ullen Sentalu 2",
                  location: "Jl. Boyong No.KM 26, Kaliurang, Hargobinangun",
                  day: 1
                },
                {
                  id: 2,
                  name: "Museum Ullen Sentalu 3",
                  location: "Jl. Boyong No.KM 25, Kaliurang, Hargobinangun",
                  day: 2
                },
              ] })}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  destinationImage: {
    maxWidth: "auto",
    minWidth: "40%",
    maxHeight: 150,
    // borderRadius: 10,
    resizeMode: "cover",
  },
});

export default ItineraryDetail;
