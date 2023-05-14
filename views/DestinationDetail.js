import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import DetailDestinationBox from "../components/DetailDestinationBox";
import RatingBox from "../components/RatingBox";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';

function DestinationDetail(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.backButtonRow}>
        <Ionicons name="arrow-back" size={24} color="black" onPress={
          () => navigation.navigate("your-plan")
        } />
        <Text style={styles.detail}>Detail</Text>
      </View>
      <ScrollView>
        <DetailDestinationBox
          style={styles.detailDestinationBox}
        ></DetailDestinationBox>
        <RatingBox style={styles.ratingBox}></RatingBox>
        <Text style={styles.aboutDestination}>About Destination</Text>
        <Text style={styles.description}>
        Menapakkan kaki di kawasan Museum Ullen Sentalu terasa balutan hawa sejuk (15-25° Celcius) dan suasana hening yang menyatu dengan alam pegunungan disekitranya yang sekaligus memberikan rasa damai serta khidmat. Area seluas 1,2 hektar yang dikembangkan secara bertahap tersebut bernama Dalem Kaswargan atau Rumah Surga, dimana Museum Ullen Sentalu berada. Jalan masuk menuju ruang pamer museum maupun artshop dan restoran berupa kelokan, undakan, serta labirin akan memberikan nuansa nostalgia, perenungan dan keindahan. Beberapa bagian bangunan dan unsur yang melengkapinya, seperti gapura, dinding tembok, taman, kolam, mencerminkan keagungan budaya leluhur yang sudah ada sejak masa silam. Berbagai jenis unsur bangunan Jawa terlihat pada layout dan struktur bangunan bergaya Indis dan post-mo yang bersatu-padu menciptakan harmoni secara menakjubkan. Koleksi berupa lukisan dan foto foto tokoh sejarah budaya Mataram Islam, kain batik vorstenlanden, karya sastra, arca arca kebudayaan Hindu Buddha, dan koleksi etnografi era Mataram Islam. Itu membingkai kisah sosial ekonomi politik seni sejarah dan budaya Jawa, terutama kisah para putri di kraton Mataram yang tidak banyak dikisahkan kepada masyarakat awam.
        </Text>
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
    marginLeft: 88,
    // marginTop: "2%"
    textAlign: "center",
  },
  backButtonRow: {
    height: 30,
    flexDirection: "row",
    marginTop: "12%",
    marginLeft: "10%",
    marginBottom: "5%",
    alignItems: "center",
    alignContent: "center",
  },
  detailDestinationBox: {
    height: 250,
    width: 304,
    marginTop: 34,
    marginLeft: 35,
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

export default DestinationDetail;
