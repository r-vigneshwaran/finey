import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="automatic"
        options={{
          tabBarLabel: "Automatic",
          title: "Automatic",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="robot-industrial"
              size={24}
              color={focused ? "teal" : "#009999"}
              style={{ opacity: focused ? 1 : 0.9 }}
            />
          ),
        }}
      />{" "}
      <Tabs.Screen
        name="analytics"
        options={{
          tabBarLabel: "Analysis",
          title: "Analysis",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="md-analytics"
              size={24}
              color={focused ? "teal" : "#009999"}
              style={{ opacity: focused ? 1 : 0.9 }}
            />
          ),
        }}
      />{" "}
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="md-home"
              size={24}
              color={focused ? "teal" : "#009999"}
              style={{ opacity: focused ? 1 : 0.9 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="budget"
        options={{
          tabBarLabel: "Budget",
          title: "Budget",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="calculator"
              size={24}
              color={focused ? "teal" : "#009999"}
              style={{ opacity: focused ? 1 : 0.9 }}
            />
          ),
        }}
      />{" "}
    </Tabs>
  );
};
