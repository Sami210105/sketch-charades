import { Pressable, Text } from "react-native";

type ButtonProps = {
  onPress?: () => void;
  title: string;
};

export const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <Pressable onPress={onPress} className="bg-black px-6 py-3 rounded-lg">
      <Text className="text-white font-semibold text-lg">{title}</Text>
    </Pressable>
  );
};
