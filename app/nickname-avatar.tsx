import { Button } from "@/components/Button";
import { avatars } from "@/constants/avatars";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function NicknameAvatarScreen() {
  const [nickname, setNickname] = useState("");
  const [avatarIndex, setAvatarIndex] = useState(0);

  const router = useRouter();

  return (
    <View className="flex-1 bg-[#0F0F0F] items-center justify-center gap-4">
      <Text className="text-[#955b38] font-pixel text-2xl font-bold">
        {" "}
        Sketch Charades{" "}
      </Text>
      <View className="flex-col gap-2 items-center mt-10">
        <Text className="text-[#d59457] text-base text-center font-pixel">
          Enter your nickname
        </Text>
        <TextInput
          value={nickname}
          onChangeText={setNickname}
          placeholder="Sam"
          placeholderTextColor="#9b6d429a"
          className="bg-[#f9edbe] text-xl text-[#955b38] border-2 border-[#955b38] rounded-lg px-2 py-1 w-64"
        />
      </View>
      <View className="flex-col gap-2 mt-10 items-center">
        <Text className="text-[#d59457] text-base text-center font-pixel">
          Select your Avatar
        </Text>

        <View className="flex-row items-center gap-4 mt-2">
          <TouchableOpacity
            className="p-2"
            onPress={() =>
              setAvatarIndex((prev) =>
                prev === 0 ? avatars.length - 1 : prev - 1,
              )
            }
          >
            <Image
              source={require("../assets/left-arrow.png")}
              className="w-6 h-6"
            />
          </TouchableOpacity>

          <View className="w-64 h-64 border-2 border-[#955b38] rounded-lg items-center justify-center bg-[#f9edbe]">
            <Image source={avatars[avatarIndex]} className="w-full h-full" />
          </View>

          <TouchableOpacity
            className="p-2"
            onPress={() =>
              setAvatarIndex((prev) =>
                prev === avatars.length - 1 ? 0 : prev + 1,
              )
            }
          >
            <Image
              source={require("../assets/right-arrow.png")}
              className="w-6 h-6"
            />
          </TouchableOpacity>
        </View>
      </View>
      <Button
        title="Confirm selection"
        color="#d59457"
        variant="solid"
        onPress={() => {
          router.push("/lobby");
        }}
      />
    </View>
  );
}
