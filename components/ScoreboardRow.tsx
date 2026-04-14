import { avatars } from "@/constants/avatars";
import { Image, Text, View } from "react-native";

type Props = {
  nickname: string;
  totalScore: number;
  rank: number;
  avatarIndex: number;
};

export default function ScoreboardRow({
  nickname,
  totalScore,
  rank,
  avatarIndex,
}: Props) {
  return (
    <View className="flex-row items-center gap-4 py-3 px-4">
      <Text className="text-4xl">🏆</Text>
      <Image source={avatars[avatarIndex]} className="w-10 h-10 rounded-full" />
      <Text className="text-white text-2xl font-bold flex-1">{nickname}</Text>
      <Text className="text-[#d59457] text-lg">{totalScore} pts</Text>
    </View>
  );
}
