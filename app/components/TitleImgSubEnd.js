import React, { useState } from "react";
import { Image, View, Text, FlatList, TextInput } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function TitleImgSubEnd({ imageSource, title, subtitle, time }) {
  return (
    <View style={{ flexDirection: "row", width: "95%" }}>
      <View style={{ width: "15%" }}>
        <Image
          style={{
            width: RFPercentage(8),
            height: RFPercentage(8),
          }}
          source={imageSource}
        />
      </View>

      <View
        style={{
          marginLeft: RFPercentage(2),
          width: "85%",

          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "95%",
            justifyContent: "flex-start",
          }}
        >
          <Text
            style={{
              fontWeight: "500",
              fontFamily: FontFamily.medium,
              fontSize: RFPercentage(2.3),
              color: Colors.blacky,
            }}
          >
            {title}
          </Text>
          <View
            style={{
              alignItems: "flex-end",
              justifyContent: "center",
              position: "absolute",
              right: 0,
            }}
          >
            <Text
              style={{
                fontFamily: FontFamily.semiBold,
                fontSize: RFPercentage(1.5),
                color: Colors.subtextcolor,
                fontWeight: "600",
              }}
            >
              {time}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "95%",
            marginLeft: RFPercentage(0.5),
            justifyContent: "flex-start",
          }}
        >
          <Text
            style={{
              marginTop: RFPercentage(1.5),
              fontFamily: FontFamily.semiBold,
              fontSize: RFPercentage(1.9),
              color: Colors.primary,
              fontWeight: "600",
            }}
          >
            {subtitle}
          </Text>
        </View>
      </View>
    </View>
  );
}
