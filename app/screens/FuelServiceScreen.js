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
import AppButton from "../components/AppButton";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function FuelServiceScreen(props) {
  const [menuid, setmenuid] = useState(1);
  const [literid, setliterid] = useState(1);

  const fuelQuality = [
    {
      id: 1,
      title: "Regular",
    },
    {
      id: 2,
      title: "Flex+",
    },
    {
      id: 3,
      title: "Premium",
    },
  ];
  const chooseLiters = [
    {
      id: 1,
      maintitle: "3 gal",
      subtitle: "15$",
    },
    {
      id: 2,
      maintitle: "5 gal",
      subtitle: "$25",
    },
    {
      id: 3,
      maintitle: "7 gal",
      subtitle: "$35",
    },
    {
      id: 4,
      maintitle: "10 gal",
      subtitle: "$50",
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
          height: "80%",
          backgroundColor: Colors.purewhite,
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {/* Fuel Service text*/}
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
            Fuel Service
          </Text>
        </View>

        {/* location */}
        <View style={{ marginTop: RFPercentage(2) }} />
        <View
          style={{
            borderWidth: 1,
            borderColor: Colors.primary,
            width: "90%",
            borderRadius: 8,
            paddingHorizontal: 12,
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
            <Ionicons name="location-sharp" color={Colors.primary} size={20} />
          </View>
        </View>

        {/* Choose Fuel  text*/}
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
            Choose Fuel
          </Text>
        </View>

        {/* Choose */}
        <View style={{ marginTop: RFPercentage(2) }} />
        <View
          style={{
            width: "90%",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "48%",
              height: RFPercentage(7),
              borderRadius: RFPercentage(1),
              backgroundColor: Colors.primary,
              borderColor: Colors.primary,
              borderWidth: RFPercentage(0.2),
              flexDirection: "row",
            }}
          >
            <View
              style={{
                height: 35,
                width: 35,
                borderRadius: 17.5,

                backgroundColor: Colors.white,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  width: RFPercentage(2),
                  height: RFPercentage(2),
                }}
                source={require("../../assets/images/petrolblue.png")}
              />
            </View>
            <Text
              style={{
                marginLeft: RFPercentage(1),
                color: Colors.white,
                fontFamily: FontFamily.semiBold,
                fontSize: RFPercentage(2.5),
              }}
            >
              Gas
            </Text>
          </TouchableOpacity>
          <View style={{ marginLeft: "4%" }} />
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "48%",
              height: RFPercentage(7),
              borderRadius: RFPercentage(1),
              borderWidth: RFPercentage(0.2),
              borderColor: Colors.lightWhite,
              backgroundColor: Colors.purewhite,
              position: "absolute",
              right: 0,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                height: 35,
                width: 35,
                borderRadius: 17.5,

                backgroundColor: Colors.primary,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  width: RFPercentage(2),
                  height: RFPercentage(2),
                }}
                source={require("../../assets/images/petrolwhite.png")}
              />
            </View>

            <Text
              style={{
                marginLeft: RFPercentage(1),
                color: Colors.blacky,
                fontFamily: FontFamily.semiBold,
                fontSize: RFPercentage(2.5),
              }}
            >
              Diesel
            </Text>
          </TouchableOpacity>
        </View>

        {/* Fuel Quality  text*/}
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
            Fuel Quality
          </Text>
        </View>

        <View style={{ marginTop: RFPercentage(2) }} />
        <View style={styles.horizocategory}>
          {fuelQuality.map((item, i) => (
            <TouchableOpacity
              key={i}
              activeOpacity={0.7}
              onPress={() => setmenuid(item.id)}
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: "30%",
                height: RFPercentage(7),
                borderRadius: RFPercentage(1),
                borderWidth: RFPercentage(0.2),
                borderColor:
                  menuid === item.id ? Colors.primary : Colors.lightWhite,
                backgroundColor:
                  menuid === item.id ? Colors.primary : Colors.purewhite,
              }}
            >
              <Text
                style={{
                  color: menuid === item.id ? Colors.white : Colors.blacky,
                  fontFamily: FontFamily.semiBold,
                  fontSize: RFPercentage(2.5),
                }}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Choose Liters  text*/}
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
            Choose Liters
          </Text>
        </View>

        <View style={{ marginTop: RFPercentage(2) }} />
        <View style={styles.horizocategory}>
          {chooseLiters.map((item, i) => (
            <TouchableOpacity
              key={i}
              activeOpacity={0.7}
              onPress={() => setliterid(item.id)}
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: "23%",
                height: RFPercentage(10),
                borderRadius: RFPercentage(1),
                borderWidth: RFPercentage(0.2),
                borderColor:
                  literid === item.id ? Colors.primary : Colors.lightWhite,
                backgroundColor:
                  literid === item.id ? Colors.primary : Colors.purewhite,
              }}
            >
              <Text
                style={{
                  color: literid === item.id ? Colors.white : Colors.blacky,
                  fontFamily: FontFamily.semiBold,
                  fontSize: RFPercentage(2.5),
                }}
              >
                {item.maintitle}
              </Text>
              <Text
                style={{
                  marginTop: RFPercentage(1),
                  color: literid === item.id ? Colors.white : Colors.primary,
                  fontFamily: FontFamily.semiBold,
                  fontSize: RFPercentage(2.5),
                }}
              >
                {item.subtitle}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* continue button */}
        <View style={{ marginTop: RFPercentage(2) }} />
        <TouchableOpacity
          style={styles.continuebutton}
          activeOpacity={0.7}
          onPress={() => {
            props.navigation.navigate("TowingAddImage");
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
  horizocategory: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  continuebutton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
