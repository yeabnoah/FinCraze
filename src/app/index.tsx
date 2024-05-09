import { Link, router, useNavigation } from "expo-router";
import React, { useState } from "react";
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
import axios from "axios";
import useUserStore from "@/state/user";
import Ip from "../utils/ip";

const { height, width } = Dimensions.get("window");

export default function Page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);
  const { user, setUser } = useUserStore();

  const login = async () => {
    try {
      const response = await axios.post(`https://fincraze.net/sender/login`, {
        username: username,
        password: password,
      });
      // Handle successful login response here, e.g., navigate to home screen
      if (response.status === 200) {
        setUser(response.data.user);
        // console.log(user);
        router.navigate("/Home");
      } else if (response.status === 404) {
      } else {
        setInvalid(true);
      }
    } catch (error) {
      // Handle login error here
      console.error("Login error:", error);
      // setInvalid(true);
    }
    // router.navigate("/Home");
  };

  return (
    <View className=" bg-primary flex-1">
      <StatusBar barStyle="light-content" />
      <View className=" flex-row h-[50%] bg-primary">
        <Image
          source={require("../assets/images/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg")}
          className=" h-[100%] w-[100%] opacity-40"
        />

        <Image
          source={require("../assets/images/fincraze.png")}
          className=" h-12 w-[60%] z-10 -ml-[80%] mt-52"
        />
      </View>
      <View className=" mx-5 mt-10 h-max">
        <Text className=" text-white text-5xl font-poppinsBold pt-2">
          Login
        </Text>
        <Text className=" text-gray-400 text-xl font-poppins mt-1 ">
          Please Sign In to Continue
        </Text>

        {invalid && ( // Conditionally render the error message
          <Text className="text-lg text-red-500 font-poppinsBold py-1">
            Invalid Username or Password
          </Text>
        )}

        <View className=" flex-row gap-1 rounded-md h-max w-max items-center bg-third mt-5 p-3">
          <Feather name="mail" size={20} color="#9e9aa8" />
          <TextInput
            placeholder="username"
            placeholderTextColor="gray"
            className=" bg-transparent w-64 px-3 text-lg font-poppins text-white"
            value={username}
            onChangeText={(text) => {
              setInvalid(false);
              setUsername(text);
            }}
          />
        </View>

        <View className=" flex-row gap-1 rounded-md h-max w-max items-center bg-third mt-5 p-3">
          <Feather name="lock" size={20} color="#9e9aa8" />
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="gray"
            className=" bg-transparent w-64 px-3 text-lg font-poppins text-white"
            value={password}
            onChangeText={(text) => {
              setInvalid(false);
              setPassword(text);
            }}
          />
        </View>

        <View className=" flex-row justify-center items-center ">
          <TouchableOpacity
            onPress={login} // Call the login function
            className=" bg-orange-400 px-16 rounded-md py-3 mt-5"
          >
            <Text className=" text-2xl font-poppinsBold">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
