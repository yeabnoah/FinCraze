import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Entypo, FontAwesome6, Ionicons } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import useCountryStore from "@/state/country";
import useCityStore from "@/state/city";

export default function Details() {
  const { city, setCity } = useCityStore();
  const { country, setCountry } = useCountryStore();
  const x = `https://www.worldometers.info/img/flags/${country.name
    .charAt(0)
    .toLowerCase()}${country.name.charAt(1).toLowerCase()}-flag.gif`;
  console.log(x);
  // const {} =
  return (
    <ScrollView className="bg-primary flex-1 pt-14">
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

        <View className=" h-max py-3 px-3 mx-5 mt-5 rounded-md flex flex-row justify-between items-center bg-slate-300">
          <View className=" flex-row items-center gap-2">
            <Image
              className=" h-[100%] text-white rounded-md"
              source={{ uri: x }}
              style={{ height: 60, width: 100 }}
            />
            <View>
              <Text className=" text-2xl text-primary mx-2 font-poppins font-bold">
                {country.name}
              </Text>

              <View className=" flex-row justify-center items-center mx-1 gap-1">
                <Entypo name="location" size={24} color="#1f192f" />
                <Text className=" text-primary text-lg font-poppinsMedium">
                  cities
                </Text>
              </View>
            </View>
          </View>
        </View>

        <ScrollView className=" mb-2">
          {country.cities.map((city) => (
            <TouchableOpacity
              key={city._id}
              onPress={() => {
                router.navigate("Details/form");
                setCity(city._id);
                console.log(city.name);
              }}
              className=" h-max py-3 px-3 mx-5 mt-5 rounded-md flex flex-row justify-between items-center bg-third"
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 16, color: "white", marginLeft: 5 }}>
                  {city.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
        {/* <TouchableOpacity
          onPress={() => {
            router.navigate("Details/form");
          }}
          className=" h-max py-3 px-3 mx-5 mt-5 rounded-md flex flex-row justify-between items-center bg-third"
        >
          <View className=" flex-row items-center">
            <Text className=" text-lg text-white mx-2 font-poppinsMedium ">
              Dire Dawa
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            router.navigate("Details/form");
          }}
          className=" h-max py-3 px-3 mx-5 mt-5 rounded-md flex flex-row justify-between items-center bg-third"
        >
          <View className=" flex-row items-center">
            <Text className=" text-lg text-white mx-2 font-poppinsMedium ">
              Hawassa
            </Text>
          </View>
        </TouchableOpacity> */}
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
            <Text className=" font-poppinsMedium text-center text-lg text-white mt-1">
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
    </ScrollView>
  );
}
