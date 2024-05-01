import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import { Entypo, FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function Details() {
  return (
    <View className=" bg-primary flex-1 pt-14">
      <StatusBar barStyle="light-content" />
      <View style={{ flex: 3 }}>
        <Text className=" text-4xl text-center font-poppinsBold text-white">
          FinCraze
        </Text>
        {/* this is gopnna be the best day and  */}
        <View
          style={{ height: 0.5, backgroundColor: "gray", marginVertical: 10 }}
        />

        <View className=" flex-row justify-between mx-5 pt-1 items-center">
          <Text className=" text-white font-poppinsMedium text-xl">
            Country
          </Text>

          <View className=" flex-row gap-1 items-center">
            <Text className=" text-white font-poppinsMedium text-xl">
              Balance
            </Text>
            <Entypo name="wallet" size={20} color="white" />
          </View>
        </View>

        <TouchableOpacity className=" h-max py-3 px-3 mx-5 mt-5 rounded-md flex flex-row justify-between items-center bg-third">
          <View className=" flex-row items-center">
            <Image
              className=" h-[100%] text-white rounded-md"
              source={require("../assets/images/Flag_of_Ethiopia.png")}
              style={{ height: 30, width: 45 }}
            />
            <Text className=" text-lg text-white mx-2 font-poppins ">
              Ethiopia
            </Text>
          </View>

          <Text className=" text-white font-poppins text-lg">1000 ETB</Text>
        </TouchableOpacity>

        <TouchableOpacity className=" h-max py-3 px-3 mx-5 mt-5 rounded-md flex flex-row justify-between items-center bg-third">
          <View className=" flex-row items-center">
            <Image
              className=" h-[100%] text-white rounded-md"
              source={require("../assets/images/istockphoto-880562092-612x612.jpg")}
              style={{ height: 30, width: 45 }}
            />
            <Text className=" text-lg text-white mx-2 font-poppins ">
              England
            </Text>
          </View>

          <Text className=" text-white font-poppins text-lg">1000 SDG</Text>
        </TouchableOpacity>

        <TouchableOpacity className=" h-max py-3 px-3 mx-5 mt-5 rounded-md flex flex-row justify-between items-center bg-third">
          <View className=" flex-row items-center">
            <Image
              className=" h-[100%] text-white rounded-md "
              source={require("../assets/images/Canada.png")}
              style={{ height: 30, width: 45 }}
            />
            <Text className=" text-lg text-white mx-2 font-poppins ">
              Canada
            </Text>
          </View>

          <Text className=" text-white font-poppins text-lg">1000 ETB</Text>
        </TouchableOpacity>

        <TouchableOpacity className=" h-max py-3 px-3 mx-5 mt-5 rounded-md flex flex-row justify-between items-center bg-third">
          <View className=" flex-row items-center">
            <Image
              className=" h-[100%] text-white rounded-md "
              source={require("../assets/images/Flag_of_Kenya.svg.png")}
              style={{ height: 30, width: 45 }}
            />
            <Text className=" text-lg text-white mx-2 font-poppins ">
              Kenya
            </Text>
          </View>

          <Text className=" text-white font-poppins text-lg">1000 ETB</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{ flex: 0.3 }}
        className=" h-20  bg-primary flex-row items-center justify-center"
      >
        <TouchableOpacity
          onPress={() => {
            router.navigate("/Home");
          }}
          className=" bg-gray-600 h-[100%] flex-row justify-center items-center"
          style={{ flex: 1 }}
        >
          <View className="flex-col justify-center items-center">
            <Entypo name="home" size={22} color="white" />
            <Text className=" font-poppins text-center text-lg text-white mt-1">
              Home
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            router.navigate("/Transaction");
          }}
          style={{ flex: 1 }}
          className="h-[100%] flex-row justify-center items-center"
        >
          <View className=" flex-col justify-center items-center">
            <FontAwesome6 name="money-bill-transfer" size={20} color="white" />
            <Text className=" font-poppins text-center text-lg text-white mt-2">
              Transaction
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
