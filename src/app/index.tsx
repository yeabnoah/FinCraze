import { Link, router, useNavigation } from "expo-router";
import React from "react";
import { Feather } from "@expo/vector-icons";
import {
  StatusBar,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useFonts } from "expo-font";

const { height, width } = Dimensions.get("window");

export default function Page() {
  return (
    <View className=" bg-primary flex-1">
      <StatusBar barStyle="light-content" />
      <View className=" flex-row h-[50%] bg-primary">
        <Image
          source={require("../assets/images/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg")}
          className=" h-[100%] w-[100%] opacity-45"
        />
      </View>
      <View className=" mx-5 mt-10 h-max">
        <Text className=" text-white text-5xl font-poppinsBold pt-2">
          Login
        </Text>
        <Text className=" text-gray-400 text-xl font-poppins mt-1 ">
          Please Sign In to Continue
        </Text>
        <View className=" flex-row gap-1 rounded-md h-max w-max items-center bg-third mt-10 p-3">
          <Feather name="mail" size={20} color="#9e9aa8" />
          <TextInput
            placeholder="username"
            placeholderTextColor="gray"
            className=" bg-transparent w-64 px-3 text-lg font-poppins text-white"
          />
        </View>

        <View className=" flex-row gap-1 rounded-md h-max w-max items-center bg-third mt-5 p-3">
          <Feather name="lock" size={20} color="#9e9aa8" />
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="gray"
            className=" bg-transparent w-64 px-3 text-lg font-poppins text-white"
          />
        </View>

        <View className=" flex-row justify-center items-center ">
          <TouchableOpacity
            onPress={() => {
              router.navigate("/Home");
            }}
            className=" bg-secondary px-16 rounded-md py-3 mt-5"
          >
            <Text className=" text-2xl font-poppinsBold">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
