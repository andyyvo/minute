import React, {Component} from "react";
import { Text, View, Image } from "react-native";

export default function TabBarIcon({ focused, text }) {
  const textColor = focused ? "#1D3953" : "#95B8DA";
  const icon = (text == "For You" ? (focused ? require('../../images/microphonebold.png') : require('../../images/microphone.png'))
  : (focused ? require('../../images/bookbold.png') : require('../../images/book.png')));

  return (
  <View style={alignItems="center"}>
    <Image
      style={{ width: 40, height: 40 }}
      source = {icon} />
    <Text style={{ color: textColor }}>{text}</Text>
  </View>
  );
};