import React, { useState } from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  FlatList,
  Switch,
  Modal,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import AppButton from "../components/AppButton";
import Ionicons from "react-native-vector-icons/Ionicons";

//Components
import Screen from "../components/Screen";
import AppModal from "../components/AppModal";
import DoubleButton from "../components/DoubleButton";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function MoreModals() {
  const [modalVisible, setModalVisible] = useState(false);
  const [secmodalVisible, setSecModalVisible] = useState(false);
  return (
    <Screen style={styles.screen}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => setModalVisible(true)}
      >
        <Text
          style={{
            fontWeight: "600",
            fontSize: RFPercentage(2),
            fontFamily: FontFamily.semiBold,
          }}
        >
          Password Update Modal
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{ marginTop: RFPercentage(4) }}
        onPress={() => setSecModalVisible(true)}
      >
        <Text
          style={{
            fontWeight: "600",
            fontSize: RFPercentage(2),
            fontFamily: FontFamily.semiBold,
          }}
        >
          Cancel Service Modal
        </Text>
      </TouchableOpacity>

      {/* 1st Modal */}
      <AppModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        style={{ justifyContent: "center" }}
      >
        {/* button */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setModalVisible(!modalVisible)}
          style={styles.firbuttonmaincon}
        >
          <Text style={styles.firbuttontext}>Continue</Text>
        </TouchableOpacity>
      </AppModal>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
});
