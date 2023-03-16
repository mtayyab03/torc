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
export default function FuncSpareTire(props) {
  const [menuid, setmenuid] = useState(1);
  const categoryList = [
    {
      id: 1,
      title: "Yes",
    },
    {
      id: 2,
      title: "No",
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
          height: "50%",
          backgroundColor: Colors.purewhite,
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {/* Provider Not Found text*/}
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
              color: Colors.textcolor,
              fontWeight: "600",
            }}
          >
            Do you have functional spare tire?
          </Text>
        </View>

        {/* radio button title */}
        <FlatList
          scrollEnabled={false}
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

        {/* text area */}
        <View style={{ marginTop: RFPercentage(3) }} />
        <View
          style={{
            width: "90%",
            borderRadius: RFPercentage(1),
            justifyContent: "center",
            backgroundColor: Colors.white,
            alignItems: "center",
            paddingVertical: RFPercentage(3),
          }}
        >
          <View
            style={{
              width: "90%",
            }}
          >
            <Text
              style={{
                fontFamily: FontFamily.medium,
                fontSize: RFPercentage(2.5),
                color: Colors.blacky,
                lineHeight: RFPercentage(3.5),
              }}
            >
              Our towing service is recommended if you do not have a functional
              spare tyre.
            </Text>
          </View>
        </View>

        {/* continue button */}
        <View style={{ marginTop: RFPercentage(2) }} />
        <TouchableOpacity
          style={styles.continuebutton}
          activeOpacity={0.7}
          onPress={() => {
            props.navigation.navigate("ModalsScreen");
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
  continuebutton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
