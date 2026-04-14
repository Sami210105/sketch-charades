import { Button } from "@/components/Button";
import { useFonts } from "expo-font";
import { router } from "expo-router";
import { Image, Text, View, useWindowDimensions } from "react-native";
import "../global.css";

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    Pixel: require("../assets/fonts/PressStart2P-Regular.ttf"),
  });
  const { width, height } = useWindowDimensions();

  if (!fontsLoaded) return null;

  return (
    <View className="flex-1 bg-[#0F0F0F] items-center justify-center">
      <Text className="text-[#955b38] font-pixel text-2xl font-bold">
        {" "}
        Sketch Charades{" "}
      </Text>
      <Text className="text-[#f9edbe] font-pixel text-sm -mb-10">
        Draw.Guess.Chaos
      </Text>

      <Image
        source={require("../assets/panda.gif")}
        style={{ width: width * 1, height: height * 0.5 }}
        resizeMode="contain"
      />
      <Button
        title="Join Room"
        color="#d59457"
        variant="solid"
        onPress={() => router.push("/nickname-avatar")}
      />
      <Button
        title="Create Private Room"
        color="#d59457"
        variant="solid"
        onPress={() => router.push("/create-room")}
      />
      <Button
        title="Enter Room Code"
        color="#f9edbe"
        variant="outline"
        onPress={() => router.push("/enter-code")}
      />
    </View>
  );
}
