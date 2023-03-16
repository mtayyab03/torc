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
import * as ImagePicker from "expo-image-picker";

//Components
import Screen from "../components/Screen";
import Fieldtwoend from "../components/Fieldtwoend";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function MyWalletTime(props) {
  const [menuid, setmenuid] = useState(1);

  const categoryList = [
    {
      id: 1,
      title: "Today",
    },
    {
      id: 2,
      title: "Yesterday",
    },
    {
      id: 3,
      title: "This Week",
    },
    {
      id: 4,
      title: "This Month",
    },
    {
      id: 5,
      title: "This Year",
    },
    {
      id: 6,
      title: "Life Time",
    },
  ];
  return (
    <Screen style={styles.screen}>
      {/* bottomsheet */}
      <View
        style={{
          borderBottomLeftRadius: RFPercentage(4),
          borderBottomRightRadius: RFPercentage(4),
          width: "100%",
          height: "50%",
          backgroundColor: Colors.purewhite,
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {/*  Service Field*/}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            props.navigation.navigate("ProviderNotFound");
          }}
          style={{
            width: "90%",
            alignItems: "flex-start",
            justifyContent: "center",
            marginTop: RFPercentage(3),
          }}
        >
          <Text
            style={{
              fontFamily: FontFamily.medium,
              fontSize: RFPercentage(2),
              color: Colors.subtextcolor,
            }}
          >
            Service
          </Text>
        </TouchableOpacity>
        <View style={{ marginTop: RFPercentage(2) }} />
        <Fieldtwoend
          inputTitle="Towing service"
          imageSource={require("../../assets/images/bluearrowdown.png")}
        />

        {/* time period */}
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
            Time Period
          </Text>
        </View>

        <View style={{ marginTop: RFPercentage(1) }} />
        <Fieldtwoend
          inputTitle="18/06/2022 - 24/07/2022"
          imageSource={require("../../assets/images/bluedateicon.png")}
        />

        {/* time period buttons Select */}
        {/* flatlist categories */}

        <FlatList
          scrollEnabled={false}
          contentContainerStyle={{
            width: "90%",
            flexWrap: "wrap",
          }}
          style={{ marginTop: RFPercentage(3), flexGrow: 0 }}
          data={categoryList}
          keyExtractor={(categoryList) => categoryList.id.toString()}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setmenuid(item.id)}
                style={{
                  marginTop: RFPercentage(1),
                  marginRight: RFPercentage(0.5),
                  marginLeft: RFPercentage(0.5),
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: RFPercentage(2.3),
                  height: RFPercentage(6.2),
                  borderRadius: RFPercentage(3),
                  backgroundColor:
                    menuid === item.id ? Colors.primary : Colors.white,
                  borderColor:
                    menuid === item.id ? Colors.primary : Colors.lightWhite,
                  borderWidth: RFPercentage(0.3),
                }}
              >
                <Text
                  style={{
                    fontSize: RFPercentage(2.5),
                    fontFamily: FontFamily.medium,
                    color: menuid === item.id ? Colors.white : Colors.third,
                  }}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>
          )}
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
