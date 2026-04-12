import { Button } from "@/components/Button";
import { Text, View } from "react-native";
import "../global.css";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold">Sketch Charades</Text>
      <Button title="Start Game" onPress={() => {}} />
    </View>
  );
}
