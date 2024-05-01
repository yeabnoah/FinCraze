import "../global.css";
import { Slot, Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    Poppins: require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
    PoppinsExtraBold: require("../assets/fonts/Poppins/Poppins-ExtraBold.ttf"),
    PoppinsMedium: require("../assets/fonts/Poppins/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return <Stack screenOptions={{ header: () => null }} />;
}
