import { Button } from "@/components/Button";
import { TeamCard } from "@/components/TeamCard";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";

export default function Lobby() {
  const [players, setPlayers] = useState([
    "Sam (Host)",
    "Sonu",
    "Samu",
    "Panda",
    "Mau",
    "Karta",
    "Bayko",
    "BABYDOLL",
  ]);

  const [teamList, setTeamList] = useState<Record<string, string[]>>({
    teamA: [],
    teamB: [],
  });

  const router = useRouter();

  const handleRandomShuffle = () => {
    if (players.length % 2 !== 0) return;

    const shuffled = [...players].sort(() => Math.random() - 0.5);

    const mid = Math.ceil(shuffled.length / 2);

    setTeamList({
      teamA: shuffled.slice(0, mid),
      teamB: shuffled.slice(mid),
    });
  };

  return (
    <View className="flex-1 bg-[#0F0F0F] py-10 px-6 items-center justify-around">
      <View className="w-full">
        <Text className="text-white text-2xl font-bold">Room {"{name}"}</Text>

        <Text className="text-gray-100 mb-6">
          3/{players.length} players joined
        </Text>

        <View className="flex-row justify-between gap-x-4">
          <TeamCard title="Team A" players={teamList["teamA"]} />
          <TeamCard title="Team B" players={teamList["teamB"]} />
        </View>
      </View>

      <View className="w-full items-center">
        <Text className="text-[#d59457] mb-2">Tap on a team to join</Text>

        <Text className="text-white mb-4">OR</Text>

        <Button
          onPress={handleRandomShuffle}
          title="Shuffle Team Randomly"
          color="#d59457"
          variant="outline"
        />
      </View>

      <Button
        title="Start Game"
        color="#d59457"
        variant="solid"
        onPress={() => router.push("/game-screen")}
      />
    </View>
  );
}
