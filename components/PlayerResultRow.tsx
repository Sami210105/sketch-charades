import { avatars } from "@/constants/avatars";
import { Image, Text, View } from "react-native";

type Props = {
  nickname: string;
  action: string;
  pointsEarned: number;
  avatarIndex: number;
};

const getBadgeColor = (pts: number) => {
  if (pts >= 200) return "#1a4a2e";
  if (pts >= 40) return "#1a3a2a";
  return "#1a2a1a";
};

export default function PlayerResultRow({
  nickname,
  action,
  pointsEarned,
  avatarIndex,
}: Props) {
  return (
    <View className="flex-row items-center gap-3 py-2 px-4">
      <Image source={avatars[avatarIndex]} className="w-10 h-10 rounded-full" />
      <Text className="flex-1 text-white text-base">
        {nickname} {action}
      </Text>
      <View
        style={{ backgroundColor: getBadgeColor(pointsEarned) }}
        className="px-3 py-1 rounded-full"
      >
        <Text className="text-green-400 text-sm">+{pointsEarned} pts</Text>
      </View>
    </View>
  );
}
