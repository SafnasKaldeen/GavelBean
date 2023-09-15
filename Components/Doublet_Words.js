import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Doublet_Words = ({
  FirstWord,
  SecondWord,
  Sze,
  Weight = 700,
  Lnk = false,
}) => {
  return (
    <Text style={{ fontSize: Sze, fontWeight: Weight, fontStyle: "normal" }}>
      <Text style={styles.FirstWord}>{FirstWord}</Text>
      {Lnk ? (
        <TouchableOpacity>
          <Text style={styles.SecondWord}>{SecondWord}</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.SecondWord}>{SecondWord}</Text>
      )}
    </Text>
  );
};

const styles = StyleSheet.create({
  FirstWord: {
    color: "#fff",
  },
  SecondWord: {
    color: "#1E90FF",
  },
});

export default Doublet_Words;
