import { CanvasTools } from "@/components/CanvasTools";
import { usePathname, useRouter } from "expo-router";
import { useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Signature, { SignatureViewRef } from "react-native-signature-canvas";

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

function Tab({
  label,
  route,
  icon,
}: {
  label: string;
  route: string;
  icon: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const active = pathname === route;

  return (
    <TouchableOpacity
      onPress={() => router.push(route as any)}
      className="items-center gap-y-1 px-4"
    >
      <Text style={{ fontSize: 20 }}>{icon}</Text>
      <Text
        className={`text-xs font-medium ${active ? "text-[#d59457]" : "text-[#888]"}`}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export default function GameScreen({ topic, domain }: GameScreenProps) {
  const [color, setColor] = useState<string>("#EF4444");
  const sigRef = useRef<SignatureViewRef>(null);

  return (
    <SafeAreaView className="flex-1 bg-[#0F0F0F]">
      <View className="flex-1 px-4 gap-y-4">
        {/* Header */}
        <View className="flex-row items-center justify-between w-full pt-2">
          <View className="gap-y-1">
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

        {/* Canvas */}
        <View className="flex-1">
          <Signature
            ref={sigRef}
            onOK={(sig) => console.log(sig)}
            penColor={color}
            backgroundColor="white"
            style={{ flex: 1 }}
          />
        </View>

        {/* Color picker + Undo / Clear */}
        <View className="gap-y-3">
          <CanvasTools onChange={(color: string) => setColor(color)} />

          <View className="flex-row gap-x-3">
            <TouchableOpacity
              onPress={() => sigRef.current?.undo()}
              className="flex-1 flex-row items-center justify-center gap-x-2 bg-[#1e1e1e] border border-[#333] rounded-xl py-3"
            >
              <Text className="text-white text-sm font-medium">Undo</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => sigRef.current?.clearSignature()}
              className="flex-1 flex-row items-center justify-center gap-x-2 bg-[#1e1e1e] border border-[#EF4444] rounded-xl py-3"
            >
              <Text className="text-[#EF4444] text-sm font-medium">Clear</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom Tab Bar */}
        <View className="flex-row justify-around py-3 border-t border-[#333]">
          <Tab icon="🏠" label="Home" route="/index" />
          <Tab icon="✏️" label="Sketch" route="/" />
          <Tab icon="🏆" label="Score Board" route="/score-screen" />
        </View>
      </View>
    </SafeAreaView>
  );
}
