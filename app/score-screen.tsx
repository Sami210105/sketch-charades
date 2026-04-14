import ScoreboardRow from "@/components/ScoreboardRow";
import { usePathname, useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MOCK_SCORES = [
  { nickname: "Priya", totalScore: 420, avatarIndex: 0 },
  { nickname: "Rahul", totalScore: 380, avatarIndex: 1 },
  { nickname: "Sneha", totalScore: 310, avatarIndex: 2 },
  { nickname: "Arjun", totalScore: 275, avatarIndex: 3 },
  { nickname: "Diya", totalScore: 210, avatarIndex: 4 },
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

export default function ScoreScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#0F0F0F]">
      <View className="flex-1">
        {/* Header */}
        <View className="px-4 pt-2 pb-4 items-center">
          <Text className="text-white text-2xl font-bold">Scoreboard</Text>
          <Text className="text-[#888] text-sm mt-1">Round 3 of 5</Text>
        </View>

        {/* Top 3 podium summary */}
        <View className="flex-row justify-center items-end gap-3 px-8 mb-6">
          {/* 2nd */}
          <View className="items-center flex-1">
            <Text className="text-2xl mb-1">🥈</Text>
            <View className="bg-[#1a1a1a] border border-[#C0C0C044] rounded-xl py-3 w-full items-center">
              <Text
                className="text-white text-xs font-semibold"
                numberOfLines={1}
              >
                {MOCK_SCORES[1]?.nickname}
              </Text>
              <Text className="text-[#C0C0C0] text-sm font-bold">
                {MOCK_SCORES[1]?.totalScore}
              </Text>
            </View>
          </View>

          {/* 1st — taller */}
          <View className="items-center flex-1">
            <Text className="text-3xl mb-1">🥇</Text>
            <View className="bg-[#1a1a1a] border border-[#FFD70044] rounded-xl py-4 w-full items-center">
              <Text
                className="text-white text-xs font-semibold"
                numberOfLines={1}
              >
                {MOCK_SCORES[0]?.nickname}
              </Text>
              <Text className="text-[#FFD700] text-sm font-bold">
                {MOCK_SCORES[0]?.totalScore}
              </Text>
            </View>
          </View>

          {/* 3rd */}
          <View className="items-center flex-1">
            <Text className="text-2xl mb-1">🥉</Text>
            <View className="bg-[#1a1a1a] border border-[#CD7F3244] rounded-xl py-3 w-full items-center">
              <Text
                className="text-white text-xs font-semibold"
                numberOfLines={1}
              >
                {MOCK_SCORES[2]?.nickname}
              </Text>
              <Text className="text-[#CD7F32] text-sm font-bold">
                {MOCK_SCORES[2]?.totalScore}
              </Text>
            </View>
          </View>
        </View>

        {/* Full list */}
        <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
          {MOCK_SCORES.map((player, index) => (
            <ScoreboardRow
              key={player.nickname}
              rank={index + 1}
              nickname={player.nickname}
              totalScore={player.totalScore}
              avatarIndex={player.avatarIndex}
            />
          ))}
        </ScrollView>

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
