import { View, Text } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Budget",
        }}
      />
    </Stack>
  );
};
