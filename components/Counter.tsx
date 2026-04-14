import { Image, Pressable, Text, View } from "react-native";

type CounterProps = {
  label: string;
  min: number;
  max: number;
  value: number;
  stride: number;
  onChange: (value: number) => void;
};

export const Counter = ({
  label,
  min,
  max,
  value,
  stride,
  onChange,
}: CounterProps) => {
  return (
    <View className="w-full mb-8">
      <View className="flex flex-row items-center justify-around gap-x-4">
        <View className="w-48 bg-[#d59457] py-3 rounded-lg">
          <Text className="text-white text-md font-semibold text-center">
            {label}
          </Text>
        </View>
        <View className="flex-1 flex-row items-center justify-between px-3 py-3 border border-[#955b38] rounded-lg">
          <Pressable onPress={() => onChange(Math.max(min, value - stride))}>
            <Image
              source={require("../assets/minus.png")}
              className="w-4 h-4"
            />
          </Pressable>
          <Text className="text-white font-semibold text-center">{value}</Text>
          <Pressable onPress={() => onChange(Math.min(max, value + stride))}>
            <Image source={require("../assets/plus.png")} className="w-4 h-4" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};
