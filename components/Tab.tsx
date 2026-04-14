import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

type TabProps = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  route: string;
  color?: string;
};

export const Tab = ({ icon, label, route, color = "#E9C46A" }: TabProps) => {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => router.push(route)}
      className="items-center justify-center px-4 py-2"
    >
      {({ pressed }) => (
        <View className={`items-center ${pressed ? "translate-y-1" : ""}`}>
          <Ionicons name={icon} size={24} color={color} />
          <Text className="text-xs mt-1 font-pixel" style={{ color }}>
            {label}
          </Text>
        </View>
      )}
    </Pressable>
  );
};
