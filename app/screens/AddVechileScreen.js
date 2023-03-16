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

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function AddVechileScreen(props) {
  const [menuid, setmenuid] = useState(1);
  const categoryList = [
    {
      id: 1,
      title: "SUV",
      imageSource: require("../../assets/images/suvcar.png"),
    },
    {
      id: 2,
      title: "Sedan",
      imageSource: require("../../assets/images/sedancar.png"),
    },
    {
      id: 3,
      title: "Convertible",
      imageSource: require("../../assets/images/convertiblecar.png"),
    },
  ];
  return (
    <Screen style={styles.screen}>
      <View style={{ width: "90%", marginTop: RFPercentage(3) }}>
        <Text
          style={{
            fontFamily: FontFamily.medium,
            fontSize: RFPercentage(2.5),
            color: Colors.subtextcolor,
            fontWeight: "500",
          }}
        >
          Select your vehicle type
        </Text>
      </View>

      {/* horizontal Slider */}
      {/* 2nd card */}
      <FlatList
        contentContainerStyle={{
          marginLeft: RFPercentage(3),
          justifyContent: "space-between",
        }}
        style={{ marginTop: RFPercentage(2), flexGrow: 0 }}
        data={categoryList}
        keyExtractor={(categoryList) => categoryList.id.toString()}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setmenuid(item.id)}
            style={{
              width: RFPercentage(20),
              height: RFPercentage(20),
              backgroundColor: menuid === item.id ? Colors.primary : "#D9D9D9",
              borderRadius: RFPercentage(1),
              alignItems: "center",
              justifyContent: "center",
              marginRight: RFPercentage(2),
            }}
          >
            <Image
              style={{
                marginTop: RFPercentage(4),
                width: RFPercentage(15),
                height: RFPercentage(6),
              }}
              source={item.imageSource}
            />

            <View style={{ marginTop: RFPercentage(2) }} />
            <Text
              style={{
                fontFamily: FontFamily.medium,
                fontSize: RFPercentage(2.5),
                color: Colors.white,
                fontWeight: "500",
              }}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* modal drop icon */}
      <View style={{ marginTop: RFPercentage(2) }} />
      <Fieldtwoend
        inputTitle="Modal"
        imageSource={require("../../assets/images/downarrow.png")}
      />

      {/* address  */}
      <View style={{ marginTop: RFPercentage(2) }} />
      <View
        style={{
          width: "90%",
          borderRadius: RFPercentage(1),
          borderWidth: RFPercentage(0.2),
          borderColor: Colors.lightWhite,
          height: RFPercentage(16),
          padding: RFPercentage(2),
        }}
      >
        <Text
          style={{
            fontFamily: FontFamily.regular,
            fontSize: RFPercentage(2.5),
            color: Colors.subtextcolor,
            fontWeight: "400",
          }}
        >
          Address
        </Text>
      </View>

      {/* Driving License icon */}
      <View style={{ marginTop: RFPercentage(2) }} />
      <View
        style={{
          width: "90%",
          borderRadius: RFPercentage(1),
          borderWidth: RFPercentage(0.2),
          borderColor: Colors.lightWhite,
          height: RFPercentage(7),
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              marginLeft: RFPercentage(2),
              fontFamily: FontFamily.regular,
              fontSize: RFPercentage(2.5),
              color: Colors.subtextcolor,
              fontWeight: "400",
            }}
          >
            Driving Licence
          </Text>
          <Image
            style={{
              marginLeft: RFPercentage(1),
              width: RFPercentage(3),
              height: RFPercentage(3),
            }}
            source={require("../../assets/images/greenticlogo.png")}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("NotificationScreen");
          }}
          style={{ position: "absolute", right: RFPercentage(2) }}
        >
          <Text
            style={{
              marginLeft: RFPercentage(2),
              fontFamily: FontFamily.medium,
              fontSize: RFPercentage(2),
              color: Colors.primary,
              fontWeight: "500",
            }}
          >
            Re-upload
          </Text>
        </TouchableOpacity>
      </View>

      {/* //inception renewal date */}
      <View style={{ width: "90%", marginTop: RFPercentage(3) }}>
        <Text
          style={{
            fontFamily: FontFamily.medium,
            fontSize: RFPercentage(2),
            color: Colors.subtextcolor,
            fontWeight: "500",
          }}
        >
          Inception renewal date
        </Text>
      </View>

      <View style={{ marginTop: RFPercentage(1) }} />
      <Fieldtwoend
        inputTitle="28/10/2023"
        imageSource={require("../../assets/images/renewdateicon.png")}
      />

      <View style={{ marginTop: RFPercentage(3) }} />
      {/* full name */}
      <TitleFfield title="Full Name" subtitle="Jane Cooper" />
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
