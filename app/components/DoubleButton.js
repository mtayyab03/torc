import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function DoubleButton({ title, subtitle, onpressSec }) {
  return (
    <View
      style={{
        width: "90%",
        flexDirection: "row",
        position: "absolute",
        bottom: RFPercentage(3),
      }}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "48%",
          height: RFPercentage(7),
          borderRadius: RFPercentage(1),
          borderColor: Colors.lightWhite,
          borderWidth: RFPercentage(0.2),
        }}
      >
        <Text
          style={{
            color: Colors.blacky,
            fontFamily: FontFamily.semiBold,
            fontSize: RFPercentage(2.5),
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
      <View style={{ marginLeft: "4%" }} />
      <TouchableOpacity
        onPress={onpressSec}
        activeOpacity={0.7}
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "48%",
          height: RFPercentage(7),
          borderRadius: RFPercentage(1),
          backgroundColor: Colors.primary,
          position: "absolute",
          right: 0,
        }}
      >
        <Text
          style={{
            color: Colors.white,
            fontFamily: FontFamily.semiBold,
            fontSize: RFPercentage(2.5),
          }}
        >
          {subtitle}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
