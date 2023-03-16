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
import Fieldtwoend from "../components/Fieldtwoend";

//Components
import Screen from "../components/Screen";
import TitleFfield from "../components/TitleFfield";
import TitleImgSubEnd from "../components/TitleImgSubEnd";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function NotificationScreen(props) {
  return (
    <Screen style={styles.screen}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("TowingServiceHome");
        }}
        style={{ width: "90%", marginTop: RFPercentage(3) }}
      >
        <Text
          style={{
            fontFamily: FontFamily.medium,
            fontSize: RFPercentage(2),
            color: Colors.subtextcolor,
            fontWeight: "500",
          }}
        >
          Today
        </Text>
      </TouchableOpacity>

      <View style={{ marginTop: RFPercentage(2) }} />
      {/* //MNA automobile */}
      <View
        style={{
          width: "90%",
          borderRadius: RFPercentage(2),
          borderWidth: RFPercentage(0.2),
          borderColor: Colors.lightWhite,
          height: RFPercentage(14),
          padding: RFPercentage(1),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TitleImgSubEnd
          imageSource={require("../../assets/images/person3.png")}
          title=" MNM Automobile"
          subtitle="Your Towing job Completed"
          time="11:40am"
        />
      </View>

      <View style={{ marginTop: RFPercentage(2) }} />
      {/* home location */}
      <View
        style={{
          width: "90%",
          borderRadius: RFPercentage(2),
          borderWidth: RFPercentage(0.2),
          borderColor: Colors.lightWhite,
          height: RFPercentage(14),
          padding: RFPercentage(1),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", width: "95%" }}>
          <View style={{ width: "15%" }}>
            <Image
              style={{
                width: RFPercentage(8),
                height: RFPercentage(8),
              }}
              source={require("../../assets/images/homeloc.png")}
            />
          </View>

          <View
            style={{
              marginLeft: RFPercentage(2.8),
              width: "80%",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "600",
                  fontFamily: FontFamily.semiBold,
                  fontSize: RFPercentage(2.3),
                  color: Colors.primary,
                }}
              >
                Home
              </Text>
              <View
                style={{
                  alignItems: "flex-end",
                  justifyContent: "center",
                  position: "absolute",
                  right: 0,
                }}
              >
                <Image
                  style={{
                    width: RFPercentage(3.5),
                    height: RFPercentage(3.5),
                  }}
                  source={require("../../assets/images/feediticon.png")}
                />
              </View>
            </View>
            <Text
              style={{
                marginTop: RFPercentage(1.5),
                fontFamily: FontFamily.medium,
                fontSize: RFPercentage(1.8),
                color: Colors.subtextcolor,
                fontWeight: "400",
              }}
            >
              364 Stillwater Ave. Attleboro. MA 02703
            </Text>
          </View>
        </View>
      </View>

      {/* notification Jane Coper */}
      <View style={{ marginTop: RFPercentage(2) }} />
      <View
        style={{
          width: "90%",
          borderRadius: RFPercentage(2),
          borderWidth: RFPercentage(0.2),
          borderColor: Colors.lightWhite,
          height: RFPercentage(38),
          padding: RFPercentage(1),

          alignItems: "center",
        }}
      >
        <TitleImgSubEnd
          imageSource={require("../../assets/images/person4.png")}
          title=" Jane Cooper"
          subtitle="The Friend you invited has been signup"
          time="01:40pm"
        />

        <View
          style={{
            width: "90%",
            alignItems: "flex-end",
          }}
        >
          <View
            style={{
              width: "81%",
              alignItems: "flex-end",
            }}
          >
            <Text
              style={{
                marginTop: RFPercentage(1),
                fontFamily: FontFamily.medium,
                fontSize: RFPercentage(2.5),
                color: Colors.subtextcolor,
                fontWeight: "400",
                lineHeight: RFPercentage(3.3),
              }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Text>
          </View>
        </View>

        {/* arrow logo */}
        <View
          style={{
            width: "95%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: RFPercentage(2),
          }}
        >
          <Image
            style={{
              width: RFPercentage(4),
              height: RFPercentage(4),
            }}
            source={require("../../assets/images/blueuparrow.png")}
          />
        </View>
      </View>

      <View style={{ marginTop: RFPercentage(2) }} />
      {/* MNM Car Service */}
      <View
        style={{
          width: "90%",
          borderRadius: RFPercentage(2),
          borderWidth: RFPercentage(0.2),
          borderColor: Colors.lightWhite,
          height: RFPercentage(14),
          padding: RFPercentage(1),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", width: "95%" }}>
          <View style={{ width: "15%" }}>
            <Image
              style={{
                width: RFPercentage(8),
                height: RFPercentage(8),
              }}
              source={require("../../assets/images/person5.png")}
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
                  color: Colors.primary,
                }}
              >
                MNM Car Service
              </Text>
              <Text
                style={{
                  marginTop: RFPercentage(1.5),
                  fontFamily: FontFamily.medium,
                  fontSize: RFPercentage(2.2),
                  color: Colors.subtextcolor,
                  fontWeight: "500",
                }}
              >
                02 Dec, 2022 | 09:18 AM
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                right: 0,
              }}
            >
              <Text
                style={{
                  fontFamily: FontFamily.semiBold,
                  fontSize: RFPercentage(2.5),
                  color: Colors.primary,
                  fontWeight: "600",
                }}
              >
                $15
              </Text>
              <View style={{ marginTop: RFPercentage(1) }} />
              <Image
                style={{
                  width: RFPercentage(4),
                  height: RFPercentage(4),
                }}
                source={require("../../assets/images/bluearrowdown.png")}
              />
            </View>
          </View>
        </View>
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
