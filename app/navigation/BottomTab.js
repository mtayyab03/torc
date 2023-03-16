import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Foundation from "react-native-vector-icons/Foundation";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

//screens
import HomeScreen from "../screens/HomeScreen";
import ReferralScreen from "../screens/ReferralScreen";
import BookingsScreen from "../screens/BookingsScreen";
import AccountScreen from "../screens/AccountScreen";
import CarScreen from "../screens/CarScreen";

//config
import Colors from "../config/Colors";

const Tab = createBottomTabNavigator();

// const CustomTabBarButton = ({ children, onPress }) => (

//       {children}
//     </View>
//   </TouchableOpacity>
// );

export default function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="AssignTask"
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: "#A0A3B1",
        headerShown: false,
        tabBarStyle: {
          height: wp("15%"),
          padding: 3,
          paddingBottom: RFPercentage(1),
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Foundation name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ReferralScreen"
        component={ReferralScreen}
        options={{
          tabBarLabel: "Referral",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="people-carry" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="CarScreen"
        component={CarScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity
              styles={{
                top: -30,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                styles={{
                  width: 70,
                  height: 70,
                  borderRadius: 35,
                  backgroundColor: Colors.primary,
                  marginBottom: 30,
                }}
              >
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: Colors.primary,
                  }}
                  resizeMode="contain"
                  source={require("../../assets/images/cariconbottom.png")}
                />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="BookingsScreen"
        component={BookingsScreen}
        options={{
          tabBarLabel: "Bookings",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="file-text" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  activeIcon: {
    width: RFPercentage(6),
    height: RFPercentage(6),
    backgroundColor: Colors.third,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
