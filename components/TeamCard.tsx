import { Pressable, ScrollView, Text, View } from "react-native";

type TeamCardProps = {
  title: string;
  players: string[];
  onPress?: () => void;
};

export const TeamCard = ({ title, players, onPress }: TeamCardProps) => {
  return (
    <Pressable
      onPress={onPress}
      className="flex-1 bg-[#2a2a2a] rounded-2xl p-5 min-h-[220px]"
    >
      <Text className="text-[#d59457] font-semibold text-lg mb-2">{title}</Text>

      <View className="h-[2px] bg-white w-16 mb-3" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {players.length === 0 ? (
          <Text className="text-gray-400 italic">No players yet</Text>
        ) : (
          players.map((player) => (
            <Text key={player} className="text-white mb-2 text-base">
              {player}
            </Text>
          ))
        )}
      </ScrollView>
    </Pressable>
  );
};
