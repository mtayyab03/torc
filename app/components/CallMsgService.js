import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function CallMsgService({
  bgcolor,
  bordcolor,
  title,
  firsticon,
  secondicon,
  onpress,
  titlecolor,
}) {
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
        onPress={onpress}
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "60%",
          height: RFPercentage(7),
          borderRadius: RFPercentage(1),
          borderColor: bordcolor,
          backgroundColor: bgcolor,
          borderWidth: RFPercentage(0.2),
        }}
      >
        <Text
          style={{
            color: titlecolor,
            fontFamily: FontFamily.semiBold,
            fontSize: RFPercentage(2.5),
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
      <View style={{ marginLeft: "9%" }} />

      <View
        style={{
          width: RFPercentage(7),
          height: RFPercentage(7),
          backgroundColor: Colors.primary,
          borderRadius: RFPercentage(1),
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            width: RFPercentage(3),
            height: RFPercentage(3),
          }}
          source={firsticon}
        />
      </View>
      <View style={{ marginLeft: "3%" }} />
      <View
        style={{
          width: RFPercentage(7),
          height: RFPercentage(7),
          backgroundColor: Colors.primary,
          borderRadius: RFPercentage(1),
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            width: RFPercentage(3),
            height: RFPercentage(3),
          }}
          source={secondicon}
        />
      </View>
    </View>
  );
}
