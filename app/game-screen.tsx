import { CanvasTools } from "@/components/CanvasTools";
import { useState } from "react";
import { Text, View } from "react-native";
import Signature from "react-native-signature-canvas";

type GameScreenProps = {
  topic: string;
  domain: string;
};

export const colors = [
  "#000000",
  "#4ADE80",
  "#FACC15",
  "#38BDF8",
  "#EF4444",
  "#F97316",
  "#EC4899",
  "#1D4ED8",
  "#8B5E3C",
];

export default function GameScreen({ topic, domain }: GameScreenProps) {
  const [color, setColor] = useState<string>("#EF4444");

  return (
    <View className="bg-[#0F0F0F] flex-1 items-center justify-center p-8 gap-4">
      <View className="flex-row items-center justify-between w-full">
        <View className="gap-y-2">
          <Text className="text-white text-xl font-semibold">
            Draw:{" "}
            <Text className="text-[#d59457] font-semibold">
              {topic ?? "Home Alone"}
            </Text>
          </Text>
          <Text className="text-[#d59457] font-semibold text-lg">
            {domain ?? "Bollywood"}
          </Text>
        </View>
        <Text className="text-white rounded-full bg-[#d59457] text-center px-4 py-2">
          0:42
        </Text>
      </View>
      <Signature
        onOK={(sig) => console.log(sig)}
        penColor={color}
        backgroundColor="white"
      />
      <CanvasTools onChange={(color: string) => setColor(color)} />
    </View>
  );
}
