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
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import useUserStore from "@/state/user";
import axios from "axios";
import useCityStore from "@/state/city";
import useCountryStore from "@/state/country";
import { response } from "express";
import Ip from "../../utils/ip";

export default function Details() {
  const { user, setUser } = useUserStore();
  const { city, setCity } = useCityStore();
  const [error, setError] = useState("");
  const { country, setCountry } = useCountryStore();

  const [formData, setFormData] = useState({
    // country: country,
    transactionFee: user.transactionFee,
    toCity: city.name,
    from: "",
    to: "",
    phoneNumber: "",
    amount: "",
    sender_message: "",
  });

  const handleChange = (key, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    axios
      .post(`http://${Ip}:3000/sender/sendMoney/${user._id}`, formData)
      .then((response) => {
        console.log("Response:", response.data);
        router.navigate("/Home");
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });

    // console.log(formData);
  };

  return (
    <ScrollView className="bg-primary flex-1 pt-14">
      <StatusBar barStyle="light-content" />
      <View style={{ flex: 3 }}>
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
          className="flex-row justify-between mx-5 pt-1 items-center"
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        <View className="mx-5 mt-5">
          <Text className="text-white font-poppins text-lg">From</Text>
          <TextInput
            placeholder="from"
            className="text-lg font-poppins bg-gray-300 py-2 rounded-md mt-2 px-3 text-black"
            value={formData.from}
            onChangeText={(text) => handleChange("from", text)}
          />
        </View>

        <View className="mx-5">
          <Text className="text-white font-poppins text-lg mt-5">To</Text>
          <TextInput
            placeholder="money being sent to"
            className="text-lg font-poppins bg-gray-300 py-2 rounded-md mt-2 px-3 text-black"
            value={formData.to}
            onChangeText={(text) => handleChange("to", text)}
          />
        </View>

        <View className="mx-5">
          <Text className="text-white font-poppins text-lg mt-5">Phone No</Text>
          <TextInput
            keyboardType="numeric"
            placeholder="Phone No"
            className="text-lg font-poppins bg-gray-300 py-2 rounded-md mt-2 px-3 text-black"
            value={formData.phoneNumber}
            onChangeText={(text) => handleChange("phoneNumber", text)}
          />
        </View>

        <View className="mx-5">
          <Text className="text-white font-poppins text-lg mt-5">Amount</Text>
          <TextInput
            keyboardType="numeric"
            placeholder="Amount"
            className="text-lg font-poppins bg-gray-300 py-2 rounded-md mt-2 px-3 text-black"
            value={formData.amount}
            onChangeText={(text) => handleChange("amount", text)}
          />
        </View>

        <View className="mx-5">
          <Text className="text-white font-poppins text-lg mt-5">
            Send a message
          </Text>
          <TextInput
            placeholder="Send a message"
            className="h-36 text-lg font-poppins bg-gray-300 py-2 rounded-md mt-2 px-3 text-black"
            value={formData.sender_message}
            onChangeText={(text) => handleChange("sender_message", text)}
          />
        </View>

        <View className="flex-row justify-center mt-10">
          <TouchableOpacity
            onPress={handleSubmit}
            className="bg-secondary w-36 p-3 rounded-md"
          >
            <Text className="text-xl font-poppinsMedium text-center">Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
