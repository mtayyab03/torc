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

//Components
import Screen from "../components/Screen";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function BookingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      {/* cup card */}
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          marginTop: RFPercentage(4),
        }}
      >
        {/* 1st card */}
        <View
          style={{
            width: "45%",
            height: RFPercentage(25),
            borderWidth: RFPercentage(0.3),
            borderColor: Colors.primary,
            borderRadius: RFPercentage(1),
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: RFPercentage(11),
              height: RFPercentage(11),
              backgroundColor: Colors.primary,
              borderRadius: RFPercentage(6),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{
                width: RFPercentage(4),
                height: RFPercentage(4),
              }}
              source={require("../../assets/images/wincuplogo.png")}
            />
          </View>
          <View style={{ marginTop: RFPercentage(1) }} />
          <Text
            style={{
              fontFamily: FontFamily.semiBold,
              fontSize: RFPercentage(2),
              color: Colors.blacky,
              fontWeight: "600",
            }}
          >
            You Won
          </Text>

          <View style={{ marginTop: RFPercentage(1.5) }} />
          <Text
            style={{
              fontFamily: FontFamily.semiBold,
              fontSize: RFPercentage(3.5),
              color: Colors.primary,
              fontWeight: "600",
            }}
          >
            $10
          </Text>
        </View>

        {/* 2nd card */}
        <View
          style={{
            position: "absolute",
            right: 0,
            width: "45%",
            height: RFPercentage(25),
            backgroundColor: "#4D94F5",
            borderRadius: RFPercentage(1),
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: RFPercentage(14),
              height: RFPercentage(14),
              backgroundColor: Colors.primary,
              borderRadius: RFPercentage(7),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{
                width: RFPercentage(6),
                height: RFPercentage(6),
              }}
              source={require("../../assets/images/wincuplogo.png")}
            />
          </View>
        </View>
      </View>

      <View style={{ marginTop: RFPercentage(2) }} />
      {/* copy link component */}

      <View
        style={{
          width: "90%",
          borderRadius: RFPercentage(1),
          borderWidth: RFPercentage(0.2),
          borderColor: Colors.lightWhite,
          height: RFPercentage(8),
          padding: RFPercentage(2),
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Text
          style={{
            fontFamily: FontFamily.regular,
            fontSize: RFPercentage(2),
            color: Colors.primary,
            fontWeight: "400",
          }}
        >
          http//ucshdg.com/s/fd/wig
        </Text>
        <View style={{ position: "absolute", right: RFPercentage(2) }}>
          <Text
            style={{
              fontFamily: FontFamily.semiBold,
              fontSize: RFPercentage(2.3),
              color: Colors.primary,
              fontWeight: "600",
            }}
          >
            Copy
          </Text>
        </View>
      </View>

      <View style={{ marginTop: RFPercentage(2) }} />
      {/* document refer component */}
      <View
        style={{
          width: "45%",
          height: RFPercentage(25),
          borderWidth: RFPercentage(0.3),
          borderColor: Colors.lightWhite,
          borderRadius: RFPercentage(1),
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <View
          style={{
            width: "100%",
            height: RFPercentage(18),
            backgroundColor: Colors.primary,
            alignItems: "center",
            justifyContent: "center",
            borderTopLeftRadius: RFPercentage(1),
            borderTopRightRadius: RFPercentage(1),
          }}
        >
          <Image
            style={{
              width: RFPercentage(6),
              height: RFPercentage(8),
            }}
            source={require("../../assets/images/pdflogo.png")}
          />
        </View>
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            alignItems: "center",
            marginTop: RFPercentage(1.7),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "90%",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: RFPercentage(3),
                height: RFPercentage(3),
              }}
              source={require("../../assets/images/pdficon.png")}
            />
            <Text
              style={{
                marginLeft: RFPercentage(1),
                fontFamily: FontFamily.medium,
                fontSize: RFPercentage(2.3),
                color: Colors.primary,
                fontWeight: "500",
              }}
            >
              Insurance
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              right: 0,
              width: "10%",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: RFPercentage(3),
                height: RFPercentage(3),
              }}
              source={require("../../assets/images/threedoticon.png")}
            />
          </View>
        </View>
      </View>

      {/* refer friend button */}
      <TouchableOpacity
        style={styles.loginbutton}
        activeOpacity={0.7}
        onPress={() => {
          props.navigation.navigate("AddVechileScreen");
        }}
      >
        <View style={styles.buttonmain}>
          <Image
            style={{
              width: RFPercentage(3.5),
              height: RFPercentage(3.5),
            }}
            source={require("../../assets/images/referlogo.png")}
          />
          <View style={{ marginLeft: RFPercentage(1) }} />
          <Text style={styles.buttontext}>Refer friend Now</Text>
        </View>
      </TouchableOpacity>
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
  loginbutton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(3),
  },
  buttonmain: {
    width: "90%",
    height: RFPercentage(7),
    borderRadius: RFPercentage(1),
    alignItems: "center",
    justifyContent: "center",
    marginTop: RFPercentage(2),
    backgroundColor: Colors.primary,
    flexDirection: "row",
  },

  buttontext: {
    color: Colors.white,
    fontSize: RFPercentage(2.5),
    fontWeight: "600",
    fontFamily: FontFamily.semiBold,
  },
});
