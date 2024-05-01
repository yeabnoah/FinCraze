import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Entypo, FontAwesome6, Ionicons } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function Details() {
  return (
    <ScrollView className=" bg-primary flex-1 pt-14">
      <StatusBar barStyle="light-content" />
      <View style={{ flex: 3 }}>
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
          className=" flex-row justify-between mx-5 pt-1 items-center"
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        {/* write the rest of the code here */}

        <View className=" mx-5 mt-5">
          <Text className=" text-white font-poppins text-lg">From</Text>
          <TextInput
            placeholder="Sender"
            className=" text-lg font-poppins bg-gray-300 py-2 rounded-md mt-2 px-3 text-black"
          />
        </View>

        <View className=" mx-5">
          <Text className=" text-white font-poppins text-lg mt-5">To</Text>
          <TextInput
            placeholder="Receiver"
            className=" text-lg font-poppins bg-gray-300 py-2 rounded-md mt-2 px-3 text-black"
          />
        </View>

        <View className=" mx-5">
          <Text className=" text-white font-poppins text-lg mt-5">
            Phone No
          </Text>
          <TextInput
            placeholder="phone No"
            className=" text-lg font-poppins bg-gray-300 py-2 rounded-md mt-2 px-3 text-black"
          />
        </View>

        <View className=" mx-5">
          <Text className=" text-white font-poppins text-lg mt-5">Amount</Text>
          <TextInput
            placeholder="Amount"
            className=" text-lg font-poppins bg-gray-300 py-2 rounded-md mt-2 px-3 text-black"
          />
        </View>

        <View className=" mx-5">
          <Text className=" text-white font-poppins text-lg mt-5">
            Send a message
          </Text>
          <TextInput
            placeholder="send a message"
            className="h-36 text-lg font-poppins bg-gray-300 py-2 rounded-md mt-2 px-3 text-black"
          />
        </View>

        <View className=" flex-row justify-center mt-10">
          <TouchableOpacity
            onPress={() => {
              router.navigate("/Home");
            }}
            className=" bg-secondary w-36 p-3 rounded-md"
          >
            <Text className=" text-xl  font-poppinsMedium text-center ">
              Send
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
