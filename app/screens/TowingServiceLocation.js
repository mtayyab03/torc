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
  Dimensions,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import DoubleButton from "../components/DoubleButton";
import Fieldtwoend from "../components/Fieldtwoend";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

const screenwidth = Dimensions.get("window").width;
export default function TowingServiceLocation(props) {
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
          height: "55%",
          backgroundColor: Colors.purewhite,
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            marginTop: RFPercentage(4),
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: FontFamily.semiBold,
              fontSize: RFPercentage(2.8),
              color: Colors.subtextcolor,
              fontWeight: "600",
            }}
          >
            Towing Service
          </Text>
          <View
            style={{
              width: "20%",
              alignItems: "center",
              justifyContent: "center",
              marginTop: RFPercentage(1),
              flexDirection: "row",
              position: "absolute",
              right: 0,
            }}
          >
            <Image
              style={{
                width: RFPercentage(4),
                height: RFPercentage(4),
              }}
              source={require("../../assets/images/loc1.png")}
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
              mi
            </Text>
          </View>
        </View>

        {/* location start to ed dash line */}
        <View style={{ marginTop: RFPercentage(3) }} />
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
                borderColor: Colors.primary,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="location-sharp"
                color={Colors.primary}
                size={20}
              />
            </View>
            <View
              style={{
                marginLeft: 15,
                borderWidth: 1,
                borderColor: Colors.primary,
                width: screenwidth / 1.3,
                borderRadius: 8,
                paddingHorizontal: 10,
                paddingVertical: 15,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View style={{ width: "85%", alignItems: "flex-start" }}>
                <Text
                  style={{
                    fontFamily: FontFamily.medium,
                    fontSize: RFPercentage(2.5),
                    color: Colors.subtextcolor,
                    fontWeight: "500",
                  }}
                >
                  4123 Big Green, LA, California
                </Text>
              </View>
              <View style={{ marginLeft: "5%" }} />
              <View
                style={{
                  position: "absolute",
                  right: 4,

                  width: "10%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons
                  name="location-sharp"
                  color={Colors.primary}
                  size={20}
                />
              </View>
            </View>
          </View>

          {/* vertical line */}
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
        </View>

        {/* 2nd box */}
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
                borderColor: Colors.orange,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="location-sharp" color={Colors.orange} size={20} />
            </View>
            <View
              style={{
                marginLeft: 15,
                borderWidth: 1,
                borderColor: Colors.grey,
                width: screenwidth / 1.3,
                borderRadius: 8,
                paddingHorizontal: 10,
                paddingVertical: 15,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View style={{ width: "85%", alignItems: "flex-start" }}>
                <Text
                  style={{
                    fontFamily: FontFamily.medium,
                    fontSize: RFPercentage(2.5),
                    color: Colors.subtextcolor,
                    fontWeight: "500",
                  }}
                >
                  Your Destination
                </Text>
              </View>
              <View style={{ marginLeft: "5%" }} />
              <View
                style={{
                  position: "absolute",
                  right: 4,

                  width: "10%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons
                  name="location-sharp"
                  color={Colors.orange}
                  size={20}
                />
              </View>
            </View>
          </View>
        </View>
        {/* location end */}

        {/* field end to end  */}
        <View style={{ marginTop: RFPercentage(3) }} />
        <Fieldtwoend
          inputTitle="Choose your vehicle"
          imageSource={require("../../assets/images/downarrow.png")}
        />

        {/* continue button */}

        <TouchableOpacity
          style={styles.loginbutton}
          activeOpacity={0.7}
          onPress={() => {
            props.navigation.navigate("BookingAccepted");
          }}
        >
          <AppButton title="Continue" />
        </TouchableOpacity>
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
  loginbutton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(2),
  },
});
