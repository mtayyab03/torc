import { View, Text, Dimensions } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFPercentage } from "react-native-responsive-fontsize";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

const screenwidth = Dimensions.get("window").width;
export default function Dashline({ lineshow, icon, iconcolor, text }) {
  return (
    <View style={{ backgroundColor: "white" }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          position: "relative",
        }}
      >
        <View
          style={{
            height: 35,
            width: 35,
            borderRadius: 17.5,
            borderWidth: 2,
            borderColor: iconcolor,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name={icon} color={iconcolor} size={20} />
        </View>
        <View
          style={{
            marginLeft: 15,
            borderWidth: 1,
            borderColor: "grey",
            width: screenwidth / 1.3,
            borderRadius: 8,
            paddingHorizontal: 20,
            paddingVertical: 13,
          }}
        >
          <Text
            style={{
              fontFamily: FontFamily.medium,
              fontSize: RFPercentage(2.5),
              color: Colors.subtextcolor,
              fontWeight: "500",
            }}
          >
            {text}
          </Text>
        </View>
      </View>
      {lineshow && (
        <View
          style={{
            height: 30,
            width: 35,
            position: "relative",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 10,
              width: 2,
              backgroundColor: Colors.primary,
              marginTop: 5,
              marginBottom: 5,
            }}
          ></View>
          <View
            style={{
              height: 10,
              width: 2,
              backgroundColor: Colors.primary,
              marginBottom: 5,
            }}
          ></View>
          <View
            style={{
              height: 10,
              width: 2,
              backgroundColor: Colors.primary,
              marginBottom: 5,
            }}
          ></View>
        </View>
      )}
    </View>
  );
}
