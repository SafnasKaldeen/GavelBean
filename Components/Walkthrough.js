import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Doublet_Words from "./Doublet_Words";
import StepperDot from "./StepperDot";
import Button from "./Button";

export default function Walkthrough({ step }) {
  console.log(step);

  const stepperDots = [1, 2, 3, 4].map((i) => (
    <StepperDot key={i} Actv={true} />
  ));

  return (
    <LinearGradient
      colors={["#26294C", "#2F315B"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      locations={[0.1, 0.74]}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Doublet_Words FirstWord="Gavel " SecondWord="Bean" Sze={32} />
        <View style={styles.imageContainer}>
          <Image
            source={require("./assets/Images/icon.png")}
            style={styles.Image}
            fadeDuration={500}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Be a part of this wonderful Family</Text>
        </View>
        <View style={styles.StepperContainer}>{stepperDots}</View>
        <View style={styles.buttonContainer}>
          <Button Desc="Next" />
        </View>
        <View style={styles.LinkTextContainer}>
          <Doublet_Words
            FirstWord="Have an account? "
            SecondWord="Log in"
            Sze={16}
            Weight={400}
            Lnk={true}
          />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 153,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 34,
  },
  Image: {
    width: 277,
    height: 276,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 327,
    height: 64,
    marginTop: 42,
  },
  text: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
  },
  StepperContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 56,
    height: 8,
  },
  buttonContainer: {
    marginTop: 36,
  },
  LinkTextContainer: {
    marginTop: 23,
  },
});
