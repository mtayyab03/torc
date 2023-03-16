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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function PersonPackage({
  image,
  title,
  subtitle,
  status,
  stcolor,
  packageno,
}) {
  return (
    <View style={{ flexDirection: "row", width: "95%" }}>
      <View style={{ width: "15%" }}>
        <Image
          style={{
            width: RFPercentage(8),
            height: RFPercentage(8),
          }}
          source={image}
        />
      </View>
      <View style={{ flexDirection: "row", width: "85%" }}>
        <View
          style={{
            marginLeft: RFPercentage(2.5),
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "600",
              fontFamily: FontFamily.medium,
              fontSize: RFPercentage(2.3),
              color: Colors.blacky,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              marginTop: RFPercentage(1.5),
              fontFamily: FontFamily.medium,
              fontSize: RFPercentage(1.7),
              color: Colors.subtextcolor,
            }}
          >
            {subtitle}
          </Text>
        </View>
        <View
          style={{
            alignItems: "flex-end",
            justifyContent: "center",
            position: "absolute",
            right: 0,
          }}
        >
          <View
            style={{
              width: RFPercentage(11),
              height: RFPercentage(4),
              backgroundColor: stcolor,
              borderRadius: RFPercentage(1),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontFamily: FontFamily.medium,
                fontSize: RFPercentage(1.5),
                color: Colors.white,
              }}
            >
              {status}
            </Text>
          </View>
          <Text
            style={{
              marginTop: RFPercentage(1.5),
              fontFamily: FontFamily.medium,
              fontSize: RFPercentage(1.7),
              color: Colors.blacky,
              fontWeight: "600",
            }}
          >
            {packageno}
          </Text>
        </View>
      </View>
    </View>
  );
}
