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

export default function TowingServiceHome(props) {
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
          height: "83%",
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
              fontSize: RFPercentage(3),
              color: "#3E4958",
              fontWeight: "600",
            }}
          >
            Towing Service Request
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
              width: RFPercentage(6),
              height: RFPercentage(6),
            }}
            source={require("../../assets/images/person6.png")}
          />
          <Text
            style={{
              fontFamily: FontFamily.semiBold,
              fontSize: RFPercentage(2.5),
              color: Colors.subtextcolor,
              fontWeight: "600",
              marginLeft: RFPercentage(1),
            }}
          >
            Sharma Shajith
          </Text>
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

        {/* dashline work here */}
        <View style={{ marginTop: RFPercentage(3) }} />
        <View
          style={{
            width: "90%",
            marginHorizontal: "2.5%",
            marginVertical: "2.5%",
          }}
        >
          <Dashline
            lineshow={true}
            icon="location-sharp"
            iconcolor={Colors.primary}
            text="4123 Big Green, LA, California"
          />
          <Dashline
            lineshow={true}
            icon="location-sharp"
            iconcolor={Colors.orange}
            text="3117 Doctors Drive, LA, California"
          />
          <Dashline
            lineshow={false}
            icon="location-sharp"
            iconcolor={Colors.green}
            text="3454 Greens Drive, LA, California"
          />
        </View>
        {/* ends dash line work */}

        {/* car name model */}
        <View style={{ marginTop: RFPercentage(3) }} />
        <View
          style={{
            width: "90%",
            borderRadius: RFPercentage(1),
            borderWidth: RFPercentage(0.2),
            borderColor: Colors.lightWhite,
            height: RFPercentage(8),
            padding: RFPercentage(0.5),
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
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
                  width: RFPercentage(5),
                  height: RFPercentage(2),
                }}
                source={require("../../assets/images/caricon.png")}
              />
            </View>

            <View style={{ marginLeft: RFPercentage(1.5) }} />
            {/* car name */}
            <Text
              style={{
                fontFamily: FontFamily.medium,
                fontSize: RFPercentage(2.5),
                color: Colors.blacky,
                fontWeight: "500",
              }}
            >
              SUV
            </Text>

            {/* model */}
            <View style={{ position: "absolute", right: RFPercentage(2) }}>
              <Text
                style={{
                  fontFamily: FontFamily.medium,
                  fontSize: RFPercentage(2.5),
                  color: Colors.primary,
                  fontWeight: "500",
                }}
              >
                Vehicle Details
              </Text>
            </View>
          </View>
        </View>

        {/* buttons */}
        <DoubleButton
          title="Cancel"
          subtitle="Accept"
          onpressSec={() => {
            props.navigation.navigate("TowingServiceLocation");
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
  horizocategory: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    marginLeft: RFPercentage(1.5),
    marginTop: RFPercentage(3),
    justifyContent: "space-between",
  },
});
