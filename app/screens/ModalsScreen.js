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

export default function ModalsScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [secmodalVisible, setSecModalVisible] = useState(false);
  const [thirdmodalVisible, setThirdModalVisible] = useState(false);
  const [fourthmodalVisible, setFourthModalVisible] = useState(false);
  const [fifthmodalVisible, setFifthModalVisible] = useState(false);
  const [sixthmodalVisible, setSixthModalVisible] = useState(false);

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
      <TouchableOpacity
        activeOpacity={0.7}
        style={{ marginTop: RFPercentage(4) }}
        onPress={() => setThirdModalVisible(true)}
      >
        <Text
          style={{
            fontWeight: "600",
            fontSize: RFPercentage(2),
            fontFamily: FontFamily.semiBold,
          }}
        >
          Reached Location
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{ marginTop: RFPercentage(4) }}
        onPress={() => setFourthModalVisible(true)}
      >
        <Text
          style={{
            fontWeight: "600",
            fontSize: RFPercentage(2),
            fontFamily: FontFamily.semiBold,
          }}
        >
          Service Completed
        </Text>
      </TouchableOpacity>

      {/* upload document */}
      <TouchableOpacity
        activeOpacity={0.7}
        style={{ marginTop: RFPercentage(4) }}
        onPress={() => setFifthModalVisible(true)}
      >
        <Text
          style={{
            fontWeight: "600",
            fontSize: RFPercentage(2),
            fontFamily: FontFamily.semiBold,
          }}
        >
          Insurance Document
        </Text>
      </TouchableOpacity>

      {/* Enable Location Modal */}
      <TouchableOpacity
        activeOpacity={0.7}
        style={{ marginTop: RFPercentage(4) }}
        onPress={() => setSixthModalVisible(true)}
      >
        <Text
          style={{
            fontWeight: "600",
            fontSize: RFPercentage(2),
            fontFamily: FontFamily.semiBold,
          }}
        >
          Enable Location
        </Text>
      </TouchableOpacity>

      {/* category creation Modal */}

      {/* 1st Modal */}
      <AppModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        style={{ justifyContent: "center" }}
      >
        <Ionicons name="checkmark-circle" size={100} color={Colors.green} />
        <View style={styles.firmainboltext}>
          <Text style={styles.firboldtext}>Password Updated</Text>
          <View style={styles.firlighttextmain}>
            <Text style={styles.firlighttext}>
              Your Password has been updated successfully.
            </Text>
          </View>
        </View>

        {/* button */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setModalVisible(!modalVisible)}
          style={styles.firbuttonmaincon}
        >
          <Text style={styles.firbuttontext}>Continue</Text>
        </TouchableOpacity>
      </AppModal>

      {/* 2nd modal */}
      <AppModal
        modalVisible={secmodalVisible}
        setModalVisible={setSecModalVisible}
        style={{ justifyContent: "center" }}
      >
        <Ionicons name="alert-circle" size={100} color={Colors.red} />

        <View style={styles.secboldtextmain}>
          <Text style={styles.secboldtext}>Cancel Service</Text>
          <View style={styles.seclighttextmain}>
            <Text style={styles.seclighttext}>
              Are you sure you want to cancel towing service?
            </Text>
          </View>
        </View>

        {/* button */}
        <View style={styles.secbuttonmain}>
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
                borderColor: Colors.lightWhite,
                borderWidth: RFPercentage(0.2),
              }}
            >
              <Text
                style={{
                  color: Colors.blacky,
                  fontFamily: FontFamily.semiBold,
                  fontSize: RFPercentage(2.5),
                }}
              >
                No
              </Text>
            </TouchableOpacity>
            <View style={{ marginLeft: "4%" }} />
            <TouchableOpacity
              onPress={() => setSecModalVisible(false)}
              activeOpacity={0.7}
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: "48%",
                height: RFPercentage(7),
                borderRadius: RFPercentage(1),
                backgroundColor: Colors.primary,
                position: "absolute",
                right: 0,
              }}
            >
              <Text
                style={{
                  color: Colors.white,
                  fontFamily: FontFamily.semiBold,
                  fontSize: RFPercentage(2.5),
                }}
              >
                Yes
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </AppModal>

      {/* 3nd modal */}
      <AppModal
        modalVisible={thirdmodalVisible}
        setModalVisible={setThirdModalVisible}
        style={{ justifyContent: "center" }}
      >
        <Image
          style={{
            width: RFPercentage(15),
            height: RFPercentage(15),
          }}
          source={require("../../assets/images/reachlocation.png")}
        />

        <View style={styles.secboldtextmain}>
          <Text style={[styles.secboldtext, { marginTop: RFPercentage(3) }]}>
            Reached location?
          </Text>
          <View style={[styles.seclighttextmain, { width: "100%" }]}>
            <Text
              style={
                (styles.seclighttext,
                {
                  textAlign: "center",
                  color: "#808080",
                  lineHeight: RFPercentage(3),
                })
              }
            >
              Activate the button Yes, if you arrive at the location and meet
              the individual responsible for delivering
            </Text>
          </View>
        </View>

        {/* button */}
        <View style={styles.secbuttonmain}>
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
                borderColor: Colors.lightWhite,
                borderWidth: RFPercentage(0.2),
              }}
            >
              <Text
                style={{
                  color: Colors.blacky,
                  fontFamily: FontFamily.semiBold,
                  fontSize: RFPercentage(2.5),
                }}
              >
                No
              </Text>
            </TouchableOpacity>
            <View style={{ marginLeft: "4%" }} />
            <TouchableOpacity
              onPress={() => setThirdModalVisible(false)}
              activeOpacity={0.7}
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: "48%",
                height: RFPercentage(7),
                borderRadius: RFPercentage(1),
                backgroundColor: Colors.primary,
                position: "absolute",
                right: 0,
              }}
            >
              <Text
                style={{
                  color: Colors.white,
                  fontFamily: FontFamily.semiBold,
                  fontSize: RFPercentage(2.5),
                }}
              >
                Yes
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </AppModal>

      {/* 4th Modal */}
      <AppModal
        modalVisible={fourthmodalVisible}
        setModalVisible={setFourthModalVisible}
        style={{ justifyContent: "center" }}
      >
        <Image
          style={{
            width: RFPercentage(20),
            height: RFPercentage(20),
          }}
          source={require("../../assets/images/servicecomplete.png")}
        />

        <View style={styles.secboldtextmain}>
          <Text style={[styles.secboldtext, { marginTop: RFPercentage(3) }]}>
            Service Completed
          </Text>
          <View style={[styles.seclighttextmain, { width: "100%" }]}>
            <Text
              style={
                (styles.seclighttext,
                {
                  textAlign: "center",
                  color: "#808080",
                  lineHeight: RFPercentage(3),
                })
              }
            >
              Activate the button Yes, if you arrive at the location and meet
              the individual responsible for delivering
            </Text>
          </View>
        </View>

        {/* button */}
        <View style={styles.secbuttonmain}>
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
                borderColor: Colors.lightWhite,
                borderWidth: RFPercentage(0.2),
              }}
            >
              <Text
                style={{
                  color: Colors.blacky,
                  fontFamily: FontFamily.semiBold,
                  fontSize: RFPercentage(2.5),
                }}
              >
                No
              </Text>
            </TouchableOpacity>
            <View style={{ marginLeft: "4%" }} />
            <TouchableOpacity
              onPress={() => setFourthModalVisible(false)}
              activeOpacity={0.7}
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: "48%",
                height: RFPercentage(7),
                borderRadius: RFPercentage(1),
                backgroundColor: Colors.primary,
                position: "absolute",
                right: 0,
              }}
            >
              <Text
                style={{
                  color: Colors.white,
                  fontFamily: FontFamily.semiBold,
                  fontSize: RFPercentage(2.5),
                }}
              >
                Yes
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </AppModal>

      {/* 5th modal */}
      <AppModal
        modalVisible={fifthmodalVisible}
        setModalVisible={setFifthModalVisible}
        style={{ justifyContent: "center" }}
      >
        <Image
          style={{
            width: RFPercentage(20),
            height: RFPercentage(20),
          }}
          source={require("../../assets/images/insurancedoc.png")}
        />
        <View style={styles.secboldtextmain}>
          <Text style={[styles.secboldtext, { marginTop: RFPercentage(3) }]}>
            Insurance Document
          </Text>
          <View style={[styles.seclighttextmain, { width: "100%" }]}>
            <Text
              style={
                (styles.seclighttext,
                {
                  textAlign: "center",
                  color: "#808080",
                  lineHeight: RFPercentage(3),
                })
              }
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </Text>
          </View>
        </View>
        {/* upload image */}
        <View style={{ marginTop: RFPercentage(5) }} />
        <Image
          style={{ height: RFPercentage(5), width: RFPercentage(6.5) }}
          source={require("../../assets/images/uploadpic.png")}
        />
        <View style={[styles.seclighttextmain, { width: "60%" }]}>
          <Text
            style={
              (styles.seclighttext,
              {
                textAlign: "center",
                color: "#808080",
                lineHeight: RFPercentage(3),
              })
            }
          >
            or Upload images (JPG, PNG, PDF) from gallery
          </Text>
        </View>

        {/* button */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setFifthModalVisible(false)}
          style={styles.firbuttonmaincon}
        >
          <Text style={styles.firbuttontext}>Upload</Text>
        </TouchableOpacity>
      </AppModal>

      {/* 6th Modal */}
      <AppModal
        modalVisible={sixthmodalVisible}
        setModalVisible={setSixthModalVisible}
        style={{ justifyContent: "center" }}
      >
        <Image
          style={{
            width: RFPercentage(13),
            height: RFPercentage(13),
          }}
          source={require("../../assets/images/enablelocation.png")}
        />
        <View style={styles.firmainboltext}>
          <Text style={[styles.firboldtext, { marginTop: RFPercentage(2) }]}>
            Enable Location
          </Text>
          <View style={styles.firlighttextmain}>
            <Text style={styles.firlighttext}>
              We need to now your location in order to provide service.
            </Text>
          </View>
        </View>

        {/* buttons */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setSixthModalVisible(false)}
          style={[styles.firbuttonmaincon, { marginTop: RFPercentage(4) }]}
        >
          <Text style={styles.firbuttontext}>Enable</Text>
        </TouchableOpacity>

        {/* not now */}
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            width: RFPercentage(35),
            height: RFPercentage(6),
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: Colors.primary,
              fontSize: RFPercentage(2.2),
              fontFamily: FontFamily.semiBold,
            }}
          >
            Not Now
          </Text>
        </TouchableOpacity>
      </AppModal>

      {/* continue button */}
      <View style={{ marginTop: RFPercentage(5) }} />
      <TouchableOpacity
        style={styles.continuebutton}
        activeOpacity={0.7}
        onPress={() => {
          props.navigation.navigate("MoreModals");
        }}
      >
        <AppButton title="More Modals" />
      </TouchableOpacity>
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
  continuebutton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  //1st modal
  firmainboltext: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: RFPercentage(3),
  },
  firboldtext: {
    color: Colors.black,
    fontSize: RFPercentage(3),
    fontFamily: FontFamily.semiBold,
  },
  firlighttextmain: {
    marginTop: RFPercentage(2),
    alignContent: "center",
    justifyContent: "center",
  },
  firlighttext: {
    color: "#696464",
    fontSize: RFPercentage(2.2),
    fontWeight: "500",
    textAlign: "center",
    lineHeight: RFPercentage(3),
    fontFamily: FontFamily.regular,
  },
  firbuttonmaincon: {
    marginBottom: RFPercentage(2),
    marginTop: RFPercentage(3),
    width: RFPercentage(35),
    height: RFPercentage(6),
    borderRadius: RFPercentage(1),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
  },
  firbuttontext: {
    color: Colors.white,
    fontSize: RFPercentage(2.2),
    fontWeight: "700",
    fontFamily: FontFamily.semiBold,
  },

  //2nd modal
  secboldtextmain: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: RFPercentage(1),
  },
  secboldtext: {
    color: Colors.black,
    fontSize: RFPercentage(2.5),
    fontWeight: "700",
    fontFamily: FontFamily.semiBold,
  },
  seclighttextmain: {
    width: "80%",
    marginTop: RFPercentage(3),
    alignContent: "center",
    justifyContent: "center",
  },
  seclighttext: {
    color: "#696464",
    fontSize: RFPercentage(2),
    fontFamily: FontFamily.regular,
    textAlign: "center",
    lineHeight: RFPercentage(3),
  },
  secbuttonmain: {
    width: "100%",
    marginTop: RFPercentage(3.5),
    marginBottom: RFPercentage(1),
    alignItems: "center",
    justifyContent: "center",
  },

  formain: { width: "100%" },
});
