import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

//screens
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen";
import AddVechileScreen from "../screens/AddVechileScreen";
import NotificationScreen from "../screens/NotificationScreen";
import TowingServiceHome from "../screens/TowingServiceHome";
import TowingServiceLocation from "../screens/TowingServiceLocation";
import BookingAccepted from "../screens/BookingAccepted";
import StartService from "../screens/StartService";
import CancelService from "../screens/CancelService";
import FuelServiceScreen from "../screens/FuelServiceScreen";
import TowingAddImage from "../screens/TowingAddImage";
import MyWalletTime from "../screens/MyWalletTime";
import ProviderNotFound from "../screens/ProviderNotFound";
import FuncSpareTire from "../screens/FuncSpareTire";
import ModalsScreen from "../screens/ModalsScreen";
import MoreModals from "../screens/MoreModals";

//navigation
import BottomTab from "./BottomTab";

const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerMode: "false" }}
      initialRouteName="SplashScreen"
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="AddVechileScreen" component={AddVechileScreen} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      <Stack.Screen name="TowingServiceHome" component={TowingServiceHome} />
      <Stack.Screen
        name="TowingServiceLocation"
        component={TowingServiceLocation}
      />
      <Stack.Screen name="BookingAccepted" component={BookingAccepted} />
      <Stack.Screen name="StartService" component={StartService} />
      <Stack.Screen name="CancelService" component={CancelService} />
      <Stack.Screen name="FuelServiceScreen" component={FuelServiceScreen} />
      <Stack.Screen name="TowingAddImage" component={TowingAddImage} />
      <Stack.Screen name="MyWalletTime" component={MyWalletTime} />
      <Stack.Screen name="ProviderNotFound" component={ProviderNotFound} />
      <Stack.Screen name="FuncSpareTire" component={FuncSpareTire} />
      <Stack.Screen name="ModalsScreen" component={ModalsScreen} />
      <Stack.Screen name="MoreModals" component={MoreModals} />

      <Stack.Screen name="BottomTab" component={BottomTab} />
    </Stack.Navigator>
  );
}
