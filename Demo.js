import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const Walkthrough1 = () => {
  return (
    <LinearGradient
      style={styles.walkthrough1}
      locations={[0, 1]}
      colors={["#b1b8de", "#c0c7e9"]}
    >
      <Text style={[styles.gavelBean, styles.beAPartTypo]}>
        <Text style={styles.gavel}>{`Gavel `}</Text>
        <Text style={styles.bean}>Bean</Text>
      </Text>
      <Text style={[styles.beAPart, styles.beAPartTypo]}>
        Be a part of this wonderful Family
      </Text>
      <View style={[styles.stepperDots, styles.stepperDotsFlexBox]}>
        <View style={styles.controlsPageControlsDot} />
        <View style={[styles.stepperDotsChild, styles.stepperLayout]} />
        <View style={[styles.stepperDotsChild, styles.stepperLayout]} />
        <View style={[styles.stepperDotsInner, styles.stepperLayout]} />
      </View>
      <Image
        style={styles.gavelclublogohrCenteralignedIcon}
        contentFit="cover"
        source={require("../assets/gavelclublogohr-centeraligned-blacktext-1.png")}
      />
      <View style={[styles.frame, styles.frameFlexBox]}>
        <View style={[styles.frame1, styles.frameFlexBox]}>
          <Text style={[styles.haveAnAccountContainer, styles.textTypo1]}>
            <Text style={styles.haveAnAccount}>{`Have an account? `}</Text>
            <Text style={[styles.logIn, styles.textTypo]}>Log in</Text>
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={console.log("Safnas")}
        style={[styles.controlsButtons, styles.stepperDotsFlexBox]}
      >
        <Text style={[styles.text, styles.textTypo]}>Create account</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  beAPartTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 32,
    position: "absolute",
  },
  stepperDotsFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  stepperLayout: {
    marginLeft: 8,
    height: 8,
    width: 8,
    borderRadius: Border.br_81xl,
  },
  frameFlexBox: {
    justifyContent: "center",
    overflow: "hidden",
  },
  textTypo1: {
    fontSize: FontSize.regularNoneMedium_size,
    textAlign: "center",
  },
  textTypo: {
    fontFamily: FontFamily.regularNoneMedium,
    fontWeight: "500",
  },
  gavel: {
    color: "#000",
  },
  bean: {
    color: Color.colorDodgerblue,
  },
  gavelBean: {
    top: 93,
    left: 119,
    fontSize: 25,
  },
  beAPart: {
    top: 499,
    left: 24,
    fontSize: 24,
    color: "#090a0a",
    width: 327,
  },
  controlsPageControlsDot: {
    height: 8,
    width: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.skyLight,
  },
  stepperDotsChild: {
    backgroundColor: Color.skyLight,
    marginLeft: 8,
  },
  stepperDotsInner: {
    backgroundColor: Color.colorDodgerblue,
  },
  stepperDots: {
    marginLeft: -28,
    bottom: 192,
    left: "50%",
  },
  gavelclublogohrCenteralignedIcon: {
    top: 174,
    left: 47,
    width: 277,
    height: 276,
    position: "absolute",
  },
  haveAnAccount: {
    fontFamily: FontFamily.interRegular,
    color: "#202325",
  },
  logIn: {
    color: Color.colorDodgerblue,
  },
  haveAnAccountContainer: {
    lineHeight: 24,
  },
  frame1: {
    width: 215,
  },
  frame: {
    top: 740,
    left: 78,
    width: 219,
    position: "absolute",
  },
  text: {
    lineHeight: 16,
    color: Color.skyWhite,
    fontSize: FontSize.regularNoneMedium_size,
    textAlign: "center",
  },
  controlsButtons: {
    right: 97,
    bottom: 95,
    left: 97,
    borderRadius: 48,
    shadowRadius: 4,
    elevation: 4,
    paddingHorizontal: 32,
    paddingVertical: 16,
    backgroundColor: Color.colorDodgerblue,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 60,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    flexDirection: "row",
  },
  walkthrough1: {
    borderRadius: 50,
    shadowRadius: 100,
    elevation: 100,
    flex: 1,
    width: "100%",
    height: 812,
    backgroundColor: "transparent",
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 60,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
});

export default Walkthrough1;
