import { colors } from "@/app/game-screen";
import { Pressable, View } from "react-native";

type CanvasToolsProps = {
  onChange: (colors: string) => void;
};

export const CanvasTools = ({ onChange }: CanvasToolsProps) => {
  return (
    <View className="w-full flex-row flex-wrap gap-4 items-center justify-start">
      {colors.map((color) => (
        <Pressable
          onPress={() => onChange(color)}
          key={color}
          style={{ backgroundColor: color }}
          className="rounded-full w-12 h-12 border border-white"
        />
      ))}
    </View>
  );
};
