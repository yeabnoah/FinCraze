import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Entypo, FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function Transaction() {
  return (
    <View className=" bg-primary flex-1 pt-14">
      <StatusBar barStyle="light-content" />
      <ScrollView style={{ flex: 3 }}>
        <Text className=" text-4xl text-center font-poppinsBold text-white">
          FinCraze
        </Text>
        <View
          style={{ height: 0.5, backgroundColor: "gray", marginVertical: 10 }}
        />

        <View className=" flex-row justify-between mx-5 pt-1 items-center">
          <Text className=" text-white font-poppinsMedium text-xl">
            Transaction History
          </Text>
        </View>

        <View className=" h-max py-3 px-3 mx-5 mt-5 rounded-md flex flex-row justify-between items-center bg-third">
          <View className=" flex-row">
            <Image
              className=" h-[100%] text-white rounded-md"
              source={require("../assets/images/Flag_of_Ethiopia.png")}
              style={{ height: 30, width: 45 }}
            />
            <View>
              <Text className=" text-lg text-white mx-2 font-poppins ">
                Ethiopia
              </Text>
              <Text className=" text-lg text-white mx-2 font-poppins ">
                Alazar Tessema
              </Text>
              <Text className=" text-lg text-white mx-2 font-poppins ">
                094575...
              </Text>
              <Text className=" text-lg text-white mx-2 font-poppins ">
                3600 Birr
              </Text>

              <TouchableOpacity className=" w-44">
                <Text className=" text-lg text-white mx-2 font-poppins bg-green-500 p-1 text-center rounded-md ">
                  Accepted
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className=" h-max py-3 px-3 mx-5 mt-5 rounded-md flex flex-row justify-between items-center bg-third">
          <View className=" flex-row">
            <Image
              className=" h-[100%] text-white rounded-md"
              source={require("../assets/images/istockphoto-880562092-612x612.jpg")}
              style={{ height: 30, width: 45 }}
            />
            <View>
              <Text className=" text-lg text-white mx-2 font-poppins ">
                England
              </Text>
              <Text className=" text-lg text-white mx-2 font-poppins ">
                Raey Tesfaye
              </Text>
              <Text className=" text-lg text-white mx-2 font-poppins ">
                094575...
              </Text>
              <Text className=" text-lg text-white mx-2 font-poppins ">
                5000 Birr
              </Text>
              <Text className=" text-lg text-white mx-2 font-poppins ">
                Message : Insufficient Money
              </Text>

              <TouchableOpacity className=" w-44">
                <Text className=" text-lg text-white mx-2 font-poppins bg-red-500 p-1 text-center rounded-md ">
                  Cancelled
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className=" h-max py-3 px-3 mx-5 mt-5 rounded-md flex flex-row justify-between items-center bg-third">
          <View className=" flex-row">
            <Image
              className=" h-[100%] text-white rounded-md"
              source={require("../assets/images/Flag_of_Kenya.svg.png")}
              style={{ height: 30, width: 45 }}
            />
            <View>
              <Text className=" text-lg text-white mx-2 font-poppins ">
                Kenya
              </Text>
              <Text className=" text-lg text-white mx-2 font-poppins ">
                Yeabsra Ashebir
              </Text>
              <Text className=" text-lg text-white mx-2 font-poppins ">
                094575...
              </Text>
              <Text className=" text-lg text-white mx-2 font-poppins ">
                8000 Birr
              </Text>
              <Text className=" text-lg text-white mx-2 font-poppins ">
                Message : wait a little bit longer Please
              </Text>
              <TouchableOpacity className=" w-44">
                <Text className=" text-lg text-white mx-2 font-poppins bg-yellow-500 p-1 text-center rounded-md ">
                  siezed
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      <View
        style={{ flex: 0.1 }}
        className=" h-20  bg-primary flex-row items-center justify-center"
      >
        <TouchableOpacity
          onPress={() => {
            router.navigate("/Home");
          }}
          className="  h-[100%] flex-row justify-center items-center"
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
          className="h-[100%] flex-row justify-center items-center bg-gray-600"
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
