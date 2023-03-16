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
import AppButton from "../components/AppButton";
import InputIcon from "../components/InputIcon";
import CardSwiper from "../components/CardSwiper";
import PersonPackage from "../components/PersonPackage";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function ReferralScreen() {
  const [link, onChangeLink] = useState("");

  return (
    <Screen style={styles.screen}>
      <View
        style={{
          flexDirection: "row",
          width: "90%",
          alignItems: "center",
          marginTop: RFPercentage(2),
        }}
      >
        <View
          style={{
            width: "10%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: RFPercentage(6),
              height: RFPercentage(6),
              borderRadius: RFPercentage(3),
              borderWidth: RFPercentage(0.2),
              borderColor: Colors.lightgrey,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Colors.white,
            }}
          >
            <Image
              style={{
                width: RFPercentage(4),
                height: RFPercentage(4),
              }}
              source={require("../../assets/images/backarrowlogo.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={{ width: "4%" }} />
        {/* search */}
        <View style={styles.searchmain}>
          <View style={styles.innermain}>
            <Image
              style={styles.img}
              source={require("../../assets/images/searchicon.png")}
            />

            <TextInput
              style={styles.inputtext}
              onChangeText={onChangeLink}
              value={link}
              placeholder={"Search your location"}
              placeholderTextColor={"#616C87"}
            />
          </View>
        </View>
      </View>

      <View style={{ marginTop: RFPercentage(2) }} />

      {/* components */}
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
        <PersonPackage
          image={require("../../assets/images/person1.png")}
          title="Car Lockout"
          subtitle="Dianne Russell"
          status="Completed"
          stcolor={Colors.green}
          packageno="CS 2864 B2"
        />
      </View>

      {/* components location towing */}
      <View style={{ marginTop: RFPercentage(2) }} />
      {/* components */}
      <View
        style={{
          width: "90%",
          borderRadius: RFPercentage(2),
          borderWidth: RFPercentage(0.2),
          borderColor: Colors.lightWhite,
          height: RFPercentage(62),
          padding: RFPercentage(1),
          alignItems: "center",
        }}
      >
        <View style={{ marginTop: RFPercentage(2.5) }} />
        <PersonPackage
          image={require("../../assets/images/person2.png")}
          title="Towing Service"
          subtitle="Cody Fisher"
          status="Cancelled"
          stcolor={Colors.red}
          packageno="TS 1586 R2"
        />

        {/* line */}
        <View
          style={{
            width: "95%",
            marginTop: RFPercentage(2.5),
            height: RFPercentage(0.2),
            backgroundColor: Colors.lightWhite,
            borderRadius: RFPercentage(1),
          }}
        />

        <View style={{ marginTop: RFPercentage(2.5) }} />

        {/* row icon title */}
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{
                width: RFPercentage(3),
                height: RFPercentage(3),
              }}
              source={require("../../assets/images/locicon.png")}
            />
            <View style={{ marginLeft: RFPercentage(0.5) }} />
            <Text
              style={{
                fontFamily: FontFamily.medium,
                fontSize: RFPercentage(2),
                color: Colors.blacky,
              }}
            >
              5.6 mi
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{
                width: RFPercentage(3),
                height: RFPercentage(3),
              }}
              source={require("../../assets/images/timeicon.png")}
            />
            <View style={{ marginLeft: RFPercentage(0.5) }} />
            <Text
              style={{
                fontFamily: FontFamily.medium,
                fontSize: RFPercentage(2),
                color: Colors.blacky,
              }}
            >
              45 min
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{
                width: RFPercentage(3),
                height: RFPercentage(3),
              }}
              source={require("../../assets/images/walleticon.png")}
            />
            <View style={{ marginLeft: RFPercentage(0.5) }} />
            <Text
              style={{
                fontFamily: FontFamily.medium,
                fontSize: RFPercentage(2),
                color: Colors.blacky,
              }}
            >
              $15
            </Text>
          </View>
        </View>

        <View style={{ marginTop: RFPercentage(2) }} />
        {/* date time */}
        <View
          style={{ width: "90%", flexDirection: "row", alignItems: "center" }}
        >
          <Text
            style={{
              fontFamily: FontFamily.medium,
              fontSize: RFPercentage(2.2),
              color: Colors.darkgrey,
            }}
          >
            Date & time
          </Text>

          <View style={{ position: "absolute", right: 0 }}>
            <Text
              style={{
                fontFamily: FontFamily.semiBold,
                fontSize: RFPercentage(2),
                color: Colors.blacky,
                fontWeight: "700",
              }}
            >
              02 Dec, 2022 | 09:18 AM
            </Text>
          </View>
        </View>

        {/* line */}
        <View
          style={{
            width: "95%",
            marginTop: RFPercentage(2.5),
            height: RFPercentage(0.2),
            backgroundColor: Colors.lightWhite,
            borderRadius: RFPercentage(1),
          }}
        />

        <View style={{ marginTop: RFPercentage(2) }} />

        {/* icon title subtitle */}
        <View style={{ flexDirection: "row", width: "95%" }}>
          <View style={{ width: "15%" }}>
            <View
              style={{
                width: RFPercentage(6.5),
                height: RFPercentage(6.5),
                borderRadius: RFPercentage(3),
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: Colors.purewhite,
              }}
            >
              <Image
                style={{
                  width: RFPercentage(2.5),
                  height: RFPercentage(3),
                }}
                source={require("../../assets/images/locationblue.png")}
              />
            </View>
          </View>

          <View
            style={{
              width: "85%",
            }}
          >
            <View
              style={{
                justifyContent: "center",
                marginLeft: RFPercentage(2),
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
                85th Beardsley St, San Diego,
              </Text>
              <Text
                style={{
                  marginTop: RFPercentage(1.2),
                  fontFamily: FontFamily.medium,
                  fontSize: RFPercentage(2),
                  color: Colors.subtextcolor,
                }}
              >
                California, 09:28 AM
              </Text>
            </View>
          </View>
        </View>

        <View style={{ marginTop: RFPercentage(4) }} />

        <View style={{ flexDirection: "row", width: "95%" }}>
          <View style={{ width: "15%" }}>
            <View
              style={{
                width: RFPercentage(6.5),
                height: RFPercentage(6.5),
                borderRadius: RFPercentage(3),
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: Colors.purewhite,
              }}
            >
              <Image
                style={{
                  width: RFPercentage(2.5),
                  height: RFPercentage(3),
                }}
                source={require("../../assets/images/locred.png")}
              />
            </View>
          </View>

          <View
            style={{
              width: "85%",
            }}
          >
            <View
              style={{
                justifyContent: "center",
                marginLeft: RFPercentage(2),
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
                6th Glendala st, Worcester,
              </Text>
              <Text
                style={{
                  marginTop: RFPercentage(1.2),
                  fontFamily: FontFamily.medium,
                  fontSize: RFPercentage(2),
                  color: Colors.subtextcolor,
                }}
              >
                California, 10:13 AM
              </Text>
            </View>
          </View>
        </View>

        <View style={{ marginTop: RFPercentage(3) }} />
        {/* car name model */}
        <View
          style={{
            width: "95%",
            borderRadius: RFPercentage(1),
            borderWidth: RFPercentage(0.2),
            borderColor: Colors.lightWhite,
            height: RFPercentage(7),
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
                height: RFPercentage(6),
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
                fontSize: RFPercentage(2),
                color: Colors.subtextcolor,
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
                  fontSize: RFPercentage(2),
                  color: Colors.subtextcolor,
                  fontWeight: "500",
                }}
              >
                TA3 1752
              </Text>
            </View>
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
            source={require("../../assets/images/uparrowlogo.png")}
          />
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
  searchmain: {
    position: "absolute",
    right: 0,
    width: "86%",
    backgroundColor: Colors.white,
    padding: RFPercentage(1),
    borderWidth: RFPercentage(0.2),
    borderColor: Colors.lightWhite,
    borderRadius: RFPercentage(5),
    height: RFPercentage(6),
    justifyContent: "center",
  },

  innermain: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: RFPercentage(1),
  },

  img: { width: RFPercentage(3), height: RFPercentage(3) },

  inputtext: {
    width: "100%",
    paddingLeft: RFPercentage(1.5),
    fontWeight: "500",
    fontSize: RFPercentage(1.9),
    color: Colors.black,
    fontFamily: FontFamily.medium,
  },
});
