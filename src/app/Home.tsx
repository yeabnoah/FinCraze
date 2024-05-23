import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Entypo, FontAwesome6 } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import axios from "axios";
import useCountryStore from "@/state/country";
import useUserStore from "@/state/user";
// import Ip from "../utils/";

export default function Home() {
  const { country, setCountry } = useCountryStore();
  const [countries, setCountries] = useState([]);
  const { user, setUser } = useUserStore();

  const fetchCity = async (id) => {
    try {
      const response = await axios.get(
        `https://fincraze.net/admin/getCountrybyid/${id}`
      );
      setCountry(response.data);
      // console.log(country);
      router.navigate("/Details/Details");
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `https://fincraze.net/admin/getsenderbyid/${user?._id}`
      );
      setUser(response.data);
      // console.log(user);
      // console.log(
      //   "this is for the user Fetch 000000000000000000000000000000000"
      // );
    } catch (err) {
      console.error("Error fetching users:", err);
      console.log(
        "this is for the user Fetch 000000000000000000000000000000000"
      );
    }
  };

  const fetchCountries = async () => {
    try {
      const response = await axios.get(
        `https://fincraze.net/admin/getCountries`
      );
      // console.log(response.data);
      setCountries(response.data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  useEffect(() => {
    const fetchCountriesInterval = setInterval(() => {
      fetchUser();
    }, 2000); // Fetch every 2 seconds

    // Cleanup function to clear the interval when the component unmounts or when dependencies change
    return () => clearInterval(fetchCountriesInterval);
  }, []); // Empty dependency array ensures that this effect runs only once when the component mounts

  return (
    <View className=" bg-primary flex-1 pt-14">
      <StatusBar barStyle="light-content" />
      <View style={{ flex: 3 }}>
        <Text className=" text-4xl text-center font-poppinsBold text-white">
          FinCraze
        </Text>
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

        <ScrollView className=" mb-2">
          {user.countries.map((country) => {
            const x = `https://www.worldometers.info/img/flags/${country.country.name
              .charAt(0)
              .toLowerCase()}${country.country.name
              .charAt(1)
              .toLowerCase()}-flag.gif`;
            // console.log(x);
            return (
              <TouchableOpacity
                key={country._id}
                onPress={() => {
                  fetchCity(country.country._id); // Pass country._id to fetchCity function
                }}
                className=" h-max py-3 px-3 mx-5 mt-5 rounded-md flex flex-row justify-between items-center bg-third"
              >
                <View className=" flex-row items-center">
                  <Image
                    className=" h-[100%] text-white rounded-md"
                    source={{
                      uri: x,
                    }}
                    style={{ height: 33, width: 45 }}
                  />
                  <Text className=" text-lg text-white mx-2 font-poppins ">
                    {country.country.name}
                  </Text>
                </View>

                <Text className=" text-white font-poppins text-lg">
                  {country.balance}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      <View
        style={{ flex: 0.23 }}
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
            <Entypo name="home" size={18} color="#0ef5e3" />
            <Text className=" font-poppins text-center text-base text-secondary mt-1">
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
            <FontAwesome6 name="money-bill-transfer" size={16} color="white" />
            <Text className=" font-poppins text-center text-base text-white mt-2">
              Transaction
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
