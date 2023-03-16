import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  FlatList,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";

//Components
import Screen from "../components/Screen";
import DoubleButton from "../components/DoubleButton";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function ProviderNotFound(props) {
  return (
    <Screen style={styles.screen}>
      {/* bottomsheet */}
      <View
        style={{
          borderTopRightRadius: RFPercentage(4),
          borderTopLeftRadius: RFPercentage(4),
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "63%",
          backgroundColor: Colors.purewhite,
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {/* Provider Not Found text*/}
        <View
          style={{
            width: "90%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: RFPercentage(3),
          }}
        >
          <Text
            style={{
              fontFamily: FontFamily.semiBold,
              fontSize: RFPercentage(2.7),
              color: Colors.textcolor,
              fontWeight: "600",
            }}
          >
            Provider Not Found
          </Text>

          {/* alert icon */}
          <View style={{ marginTop: RFPercentage(2) }} />
          <Ionicons name="alert-circle" size={110} color={Colors.red} />

          {/* text */}
          <View style={{ marginTop: RFPercentage(3) }} />
          <Text
            style={{
              fontFamily: FontFamily.medium,
              fontSize: RFPercentage(2.2),
              color: Colors.textcolor,
              textAlign: "center",
              lineHeight: RFPercentage(3),
            }}
          >
            Provider not found within 10mi range. We will increase the range now
          </Text>
        </View>

        {/* charges distance */}
        <View style={{ marginTop: RFPercentage(3) }} />
        <View
          style={{
            width: "90%",
            borderRadius: RFPercentage(1),
            borderWidth: RFPercentage(0.2),
            borderColor: Colors.lightWhite,
            justifyContent: "center",
            paddingHorizontal: RFPercentage(2),
            paddingVertical: RFPercentage(2),
          }}
        >
          <Text
            style={{
              fontFamily: FontFamily.semiBold,
              fontSize: RFPercentage(2.5),
              color: Colors.subtextcolor,
              fontWeight: "400",
            }}
          >
            Extra Charge
          </Text>
          <View style={{ flexDirection: "row", marginTop: RFPercentage(1) }}>
            <Ionicons name="location-sharp" color={Colors.primary} size={20} />
            <Text
              style={{
                marginLeft: RFPercentage(1),
                fontFamily: FontFamily.medium,
                fontSize: RFPercentage(2),
                color: Colors.darkgrey,
              }}
            >
              10mi
            </Text>
          </View>
          <View style={{ position: "absolute", right: RFPercentage(2) }}>
            <Text
              style={{
                marginLeft: RFPercentage(2),
                fontFamily: FontFamily.semiBold,
                fontSize: RFPercentage(2.5),
                color: Colors.primary,
                fontWeight: "400",
              }}
            >
              $5
            </Text>
          </View>
        </View>

        {/* buttons */}
        <DoubleButton
          title="Cancel"
          subtitle="Proceed"
          onpressSec={() => {
            props.navigation.navigate("FuncSpareTire");
          }}
        />
      </View>
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
