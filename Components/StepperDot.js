import { View, StyleSheet } from "react-native";
import React from "react";

export default function StepperDot({ Actv = false }) {
  return (
    <View
      style={[
        styles.StepperDot,
        { backgroundColor: Actv ? "#1E90FF" : "grey" },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  StepperDot: {
    width: 8,
    height: 8,
    borderRadius: 100,
    marginTop: 46,
    opacity: 1,
  },
});
