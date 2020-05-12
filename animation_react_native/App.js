import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from "lottie-react-native";

export default function App() {
  return (
    <LottieView source={require("./assets/green-monster.json")} autoPlay loop/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
