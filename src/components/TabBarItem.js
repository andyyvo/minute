import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TabBarIcon({ focused, iconName, text }) {
    const iconFocused = focused ? "cyan" : "blue";
    return (
    <View style={alignItems="center"}>
      <Ionicons name={iconName} size={16} color={iconFocused}/>
      <Text style={{ color: iconFocused }}>{text}</Text>
    </View>
    );
};