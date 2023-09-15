import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({ Desc }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={{
        backgroundColor: "#1E90FF",
        width: 182,
        height: 48,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 48,
      }}
    >
      <Text style={{ color: "white", fontSize: 16 }}>{Desc}</Text>
    </TouchableOpacity>
  );
};

export default Button;
