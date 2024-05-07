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
import Ip from "../utils/ip";
import useUserStore from "@/state/user";

export default function Transaction() {
  const [transactions, setTransactions] = useState([]);
  const { user, setUser } = useUserStore();

  const fetchTransaction = async () => {
    const response = await axios.get(
      `http://${Ip}:3000/sender/gettransactions/${user?._id}`
    );

    setTransactions(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    const fetchCountriesInterval = setInterval(() => {
      fetchTransaction();
    }, 2000); // Fetch every 2 seconds

    // Cleanup function to clear the interval when the component unmounts or when dependencies change
    return () => clearInterval(fetchCountriesInterval);
  }, []);
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

        {transactions.map((transaction) => {
          const x = `https://www.worldometers.info/img/flags/${transaction.country
            .charAt(0)
            .toLowerCase()}${transaction.country
            .charAt(1)
            .toLowerCase()}-flag.gif`;
          console.log(x);
          return (
            <View
              key={transaction._id}
              className=" h-max py-3 px-3 mx-5 mt-5 rounded-md flex flex-row justify-between items-center bg-third"
            >
              <View className=" flex-row">
                <Image
                  className=" h-[100%] text-white rounded-md"
                  source={{ uri: x }}
                  style={{ height: 30, width: 45 }}
                />
                <View>
                  <Text className=" text-lg text-white mx-2 font-poppins ">
                    {transaction.country}
                  </Text>
                  <Text className=" text-lg text-white mx-2 font-poppins ">
                    {transaction.from}
                  </Text>
                  <Text className=" text-lg text-white mx-2 font-poppins ">
                    {transaction.phoneNumber}
                  </Text>
                  <Text className=" text-lg text-white mx-2 font-poppins ">
                    {transaction.amount}
                  </Text>

                  <Text className=" text-lg text-white mx-2 font-poppins ">
                    {transaction.sender_message}
                  </Text>

                  <TouchableOpacity className="w-44">
                    <Text
                      className={`text-lg text-white mx-2 font-poppins p-1 text-center rounded-md ${
                        transaction.status === "accepted"
                          ? "bg-green-500" // green for approved
                          : transaction.status === "seized"
                          ? "bg-yellow-500" // yellow for seized
                          : transaction.status === "canceled"
                          ? "bg-red-500" // red for cancelled
                          : "bg-blue-500" // default to blue if status is not recognized
                      }`}
                    >
                      {transaction.status}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        })}

        {/* <View className=" h-max py-3 px-3 mx-5 mt-5 rounded-md flex flex-row justify-between items-center bg-third">
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
        </View> */}
      </ScrollView>

      <View
        style={{ flex: 0.075 }}
        className=" h-20 flex-row items-center justify-center"
      >
        <TouchableOpacity
          onPress={() => {
            router.navigate("/Home");
          }}
          className=" h-[100%] flex-row justify-center items-center"
          style={{ flex: 1 }}
        >
          <View className="flex-col justify-center items-center">
            <Entypo name="home" size={18} color="white" />
            <Text className=" font-poppins text-center text-base text-white mt-1">
              Home
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            router.navigate("/Transaction");
          }}
          style={{ flex: 1 }}
          className=" bg-gray-600 h-[100%] flex-row justify-center items-center"
        >
          <View className=" flex-col justify-center items-center">
            <FontAwesome6
              name="money-bill-transfer"
              size={16}
              color="#0ef5e3"
            />
            <Text className=" font-poppins text-center text-base text-secondary mt-2">
              Transaction
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
