import React, { useState, useEffect } from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Pressable,
  Modal,
  onPress,
  Alert,
  TextInput,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//config
import Colors from "../config/Colors";

export default function ImageInput({ imageUri, OnChangeImage }) {
  useEffect(() => {
    requestPermission();
  }, []);
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library");
  };

  const handlepress = () => {
    if (!imageUri) pickImage();
    else
      Alert.alert("Delete", "Are you sure you want to delete?", [
        {
          text: "Yes",
          onPress: () => {
            OnChangeImage(null);
          },
        },
        { text: "No" },
      ]);
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      OnChangeImage(result.assets[0].uri);
    }
  };
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={handlepress}
        style={{
          width: RFPercentage(12),
          height: RFPercentage(12),
          borderRadius: RFPercentage(1),
          borderWidth: RFPercentage(0.2),
          borderColor: Colors.primary,
          alignItems: "center",
          justifyContent: "center",
          marginLeft: RFPercentage(3),
        }}
      >
        {!imageUri && (
          <View
            style={{
              width: RFPercentage(6),
              height: RFPercentage(6),
              backgroundColor: Colors.primary,
              borderRadius: RFPercentage(3),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialCommunityIcons
              name="camera"
              color={Colors.white}
              size={30}
            />
          </View>
        )}
        {imageUri && (
          <Image
            source={{ uri: imageUri }}
            style={{
              width: RFPercentage(12),
              height: RFPercentage(12),
              borderRadius: RFPercentage(1),
            }}
          />
        )}
      </TouchableOpacity>
    </>
  );
}
