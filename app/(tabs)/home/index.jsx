import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const home = () => {
  return (
    <View>
      <Link href={"/home/settings"}>
        <Ionicons name="md-settings" color="teal" size={24} />
      </Link>
    </View>
  );
};

export default home;
