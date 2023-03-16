import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import InputIcon from "../components/InputIcon";
import CardSwiper from "../components/CardSwiper";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function HomeScreen() {
  const categoryList = [
    {
      id: 1,
      title: "Towing",
      imageSource: require("../../assets/images/towing.png"),
    },
    {
      id: 2,
      title: "Lockout",
      imageSource: require("../../assets/images/lockout.png"),
    },
    {
      id: 3,
      title: "Fuel",
      imageSource: require("../../assets/images/fuel.png"),
    },
    {
      id: 4,
      title: "Battery",
      imageSource: require("../../assets/images/battery.png"),
    },
  ];

  return (
    <Screen style={styles.screen}>
      {/* search */}
      <InputIcon
        imageSource={require("../../assets/images/searchicon.png")}
        title="Search any Services"
      />

      {/* Swiper horizontal */}
      <CardSwiper image={require("../../assets/images/sliderpic.png")} />

      {/* service category */}
      <View style={{ width: "90%" }}>
        <Text
          style={{
            fontFamily: FontFamily.medium,
            fontSize: RFPercentage(2.5),
            color: Colors.subtextcolor,
          }}
        >
          Our Services
        </Text>
      </View>

      {/* category */}
      <FlatList
        scrollEnabled={false}
        contentContainerStyle={{
          width: "90%",
          justifyContent: "space-between",
        }}
        style={{ marginTop: RFPercentage(2), flexGrow: 0 }}
        data={categoryList}
        keyExtractor={(categoryList) => categoryList.id.toString()}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({ item }) => (
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <View
              style={{
                width: RFPercentage(10),
                height: RFPercentage(10),
                borderRadius: RFPercentage(1),
                alignItems: "center",
                justifyContent: "center",
                borderWidth: RFPercentage(0.2),
                borderColor: Colors.lightWhite,
                marginRight: RFPercentage(1),
              }}
            >
              <Image
                style={{
                  width: RFPercentage(5),
                  height: RFPercentage(5),
                }}
                source={item.imageSource}
              />
            </View>

            <Text
              style={{
                marginTop: RFPercentage(1.5),
                fontFamily: FontFamily.medium,
                fontSize: RFPercentage(2),
                color: Colors.subtextcolor,
              }}
            >
              {item.title}
            </Text>
          </View>
        )}
      />

      {/* Swiper horizontal */}
      <CardSwiper image={require("../../assets/images/btspimg.png")} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
});
