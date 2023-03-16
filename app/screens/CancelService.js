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

//Components
import Screen from "../components/Screen";
import DoubleButton from "../components/DoubleButton";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function CancelService(props) {
  const [menuid, setmenuid] = useState(1);
  const categoryList = [
    {
      id: 1,
      title: "Provider was not contactable",
    },
    {
      id: 2,
      title: "Provider asked me to cancel",
    },
    {
      id: 3,
      title: "Provider got stuck in traffic",
    },
    {
      id: 4,
      title: "Provider was not in the location",
    },
    {
      id: 5,
      title: "Problem Solved ",
    },
    {
      id: 6,
      title: "Provider misleading service",
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
          height: "78%",
          backgroundColor: Colors.purewhite,
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {/* Towing Service Request*/}
        <View
          style={{
            width: "90%",
            alignItems: "flex-start",
            justifyContent: "center",
            marginTop: RFPercentage(3),
          }}
        >
          <Text
            style={{
              fontFamily: FontFamily.semiBold,
              fontSize: RFPercentage(3),
              color: Colors.textcolor,
              fontWeight: "600",
            }}
          >
            Cancel Service
          </Text>
        </View>

        {/* radio button title */}
        <FlatList
          style={{ width: "90%", flexGrow: 0 }}
          data={categoryList}
          keyExtractor={(categoryList) => categoryList.id.toString()}
          showsVerticalScrollIndicator={false}
          vertical
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: RFPercentage(3.5),
              }}
            >
              {/* radio button */}
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setmenuid(item.id)}
                style={{
                  width: RFPercentage(3),
                  height: RFPercentage(3),
                  borderWidth: RFPercentage(0.2),
                  borderRadius: RFPercentage(2),
                  borderColor: Colors.primary,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {menuid === item.id ? (
                  <View
                    style={{
                      width: RFPercentage(2),
                      height: RFPercentage(2),
                      borderRadius: RFPercentage(2),
                      backgroundColor: Colors.primary,
                    }}
                  />
                ) : null}
              </TouchableOpacity>

              {/* title */}
              <View style={{ marginLeft: RFPercentage(2) }} />
              <Text
                style={{
                  fontFamily: FontFamily.semiBold,
                  fontSize: RFPercentage(2.5),
                  color: Colors.subtextcolor,
                  fontWeight: "600",
                }}
              >
                {item.title}
              </Text>
            </View>
          )}
        />

        {/* lorem text */}
        <View
          style={{
            marginTop: RFPercentage(3),
            width: "90%",
          }}
        >
          <Text
            style={{
              fontFamily: FontFamily.regular,
              fontSize: RFPercentage(2),
              color: Colors.subtextcolor,
              fontWeight: "600",
              lineHeight: RFPercentage(3.5),
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Pellentesque pellentesque
            dignissim ut risus vel vel eu. Lacus vivamus mauris eu sodales
            pellentesque. congue fringilla pellentesque.
          </Text>
        </View>

        {/* buttons */}
        <DoubleButton
          title="Go back"
          subtitle="Submit"
          onpressSec={() => {
            props.navigation.navigate("FuelServiceScreen");
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
