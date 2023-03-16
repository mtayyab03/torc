import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//config
import Colors from "../config/Colors";

export default function AppLine() {
  return (
    <View
      style={{
        width: "90%",
        height: RFPercentage(0.2),
        backgroundColor: Colors.lightWhite,
        borderRadius: RFPercentage(1),
      }}
    />
  );
}
