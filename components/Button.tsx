import { Pressable, Text } from "react-native";

type ButtonProps = {
  onPress?: () => void;
  title: string;
  color: string; // hex like "#2facb7"
  variant?: "solid" | "outline";
};

export const Button = ({
  title,
  color,
  variant = "solid",
  onPress,
}: ButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <Text
          className={`
            px-6 py-2 mb-4 mt-4 items-center text-center
            border-4 font-bold text-sm w-80 rounded-lg font-pixel
            ${pressed ? "translate-x-1 translate-y-1" : ""}
          `}
          style={{
            backgroundColor: variant === "solid" ? color : "transparent",
            borderColor: color,
            color: variant === "solid" ? "#ffffff" : color,
          }}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
};
