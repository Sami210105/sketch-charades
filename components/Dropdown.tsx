import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

type DropdownProps = {
  label: string;
  options: string[];
  value: string;
  onChange: (option: string) => void;
};

export const Dropdown = ({
  label,
  options,
  value,
  onChange,
}: DropdownProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <View className="w-full mb-8">
      <View className="flex-row items-center gap-x-4">
        <View className="w-48 bg-[#d59457] py-3 rounded-lg">
          <Text className="text-white font-semibold text-center">{label}</Text>
        </View>

        <View className="flex-1 relative">
          <Pressable
            onPress={() => setOpen((prev) => !prev)}
            className="flex-row items-center justify-between px-3 py-3 border border-[#955b38] rounded-lg"
          >
            <Text className="text-white font-semibold">{value}</Text>

            <Image
              source={require("../assets/carrot-down.png")}
              className="w-4 h-4"
            />
          </Pressable>

          {open && (
            <View className="absolute top-12 left-0 right-0 bg-[#222] rounded-lg z-50 overflow-hidden">
              {options.map((option) => (
                <Pressable
                  key={option}
                  onPress={() => {
                    onChange(option);
                    setOpen(false);
                  }}
                  className="px-3 py-3 active:bg-[#333]"
                >
                  <Text className="text-white text-center">{option}</Text>
                </Pressable>
              ))}
            </View>
          )}
        </View>
      </View>
    </View>
  );
};
