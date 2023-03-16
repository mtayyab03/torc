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

//Components
import Screen from "../components/Screen";
import DoubleButton from "../components/DoubleButton";
import Dashline from "../components/DashLine";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import CallMsgService from "../components/CallMsgService";
import AppButton from "../components/AppButton";
export default function StartService(props) {
  const categoryList = [
    {
      id: 1,
      title: "4.2 mi",
      imageSource: require("../../assets/images/loc1.png"),
    },
    {
      id: 2,
      title: "5.6 mi",
      imageSource: require("../../assets/images/loc2.png"),
    },
    {
      id: 3,
      title: "45 min",
      imageSource: require("../../assets/images/minicon.png"),
    },
    {
      id: 4,
      title: "$15",
      imageSource: require("../../assets/images/walleticon2.png"),
    },
  ];
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
          height: "58%",
          backgroundColor: Colors.purewhite,
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {/* Towing Service Request*/}
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
              fontSize: RFPercentage(3.5),
              color: "#3E4958",
              fontWeight: "600",
            }}
          >
            Booking Accepted
          </Text>
        </View>

        {/* profile */}
        <View
          style={{
            width: "90%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: RFPercentage(3),
            flexDirection: "row",
          }}
        >
          <Image
            style={{
              width: RFPercentage(8),
              height: RFPercentage(8),
            }}
            source={require("../../assets/images/person6.png")}
          />
          <View style={{ marginLeft: RFPercentage(1.5) }}>
            <Text
              style={{
                fontFamily: FontFamily.semiBold,
                fontSize: RFPercentage(2.5),
                color: Colors.blacky,
                fontWeight: "600",
              }}
            >
              MNM Automobile
            </Text>
            <View style={{ marginTop: RFPercentage(1) }} />
            <Text
              style={{
                fontFamily: FontFamily.semiBold,
                fontSize: RFPercentage(2.5),
                color: Colors.subtextcolor,
                fontWeight: "600",
              }}
            >
              Booking ID : TS 1586 R2
            </Text>
          </View>
        </View>

        {/* data */}
        <View style={styles.horizocategory}>
          {categoryList.map((item, i) => (
            <View
              key={i}
              style={{
                width: "20%",
                alignItems: "center",
                justifyContent: "center",
                marginTop: RFPercentage(1),
                flexDirection: "row",
                marginRight: RFPercentage(1),
              }}
            >
              <Image
                style={{
                  width: RFPercentage(3),
                  height: RFPercentage(3),
                }}
                source={item.imageSource}
              />
              <Text
                style={{
                  fontFamily: FontFamily.semiBold,
                  fontSize: RFPercentage(2),
                  color: Colors.subtextcolor,
                  fontWeight: "600",
                  marginLeft: RFPercentage(1),
                }}
              >
                {item.title}
              </Text>
            </View>
          ))}
        </View>

        {/* view order text*/}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            props.navigation.navigate("StartService");
          }}
          style={{
            width: "90%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: RFPercentage(4),
          }}
        >
          <Text
            style={{
              fontFamily: FontFamily.semiBold,
              fontSize: RFPercentage(3),
              color: Colors.primary,
              fontWeight: "600",
            }}
          >
            View Order Details
          </Text>
        </TouchableOpacity>

        {/* start service button */}
        <View style={{ marginTop: RFPercentage(2) }} />
        <AppButton title="Start Service" />

        {/* button cancel,message,call */}
        <View style={{ marginTop: RFPercentage(3) }} />
        <CallMsgService
          bgcolor={Colors.purewhite}
          bordcolor={Colors.lightWhite}
          title="Cancel Service"
          titlecolor={Colors.blacky}
          firsticon={require("../../assets/images/messagesicon.png")}
          secondicon={require("../../assets/images/callicon.png")}
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
  horizocategory: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    marginLeft: RFPercentage(1.5),
    marginTop: RFPercentage(3),
    justifyContent: "space-between",
  },
});
