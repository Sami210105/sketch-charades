import { Button } from "@/components/Button";
import { Counter } from "@/components/Counter";
import { Dropdown } from "@/components/Dropdown";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

export default function CreateRoom() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-around bg-[#0F0F0F]">
      <Options />
      <Button
        color="#d59457"
        title="Create Room"
        variant="solid"
        onPress={() => router.push("/lobby")}
      />
    </View>
  );
}

const Options = () => {
  const [dropdownItems, setDropdownItems] = useState([
    {
      label: "Language",
      options: ["English", "Hindi", "Marathi"],
      value: "English",
      onChange: () => {},
    },
    {
      label: "Domain",
      options: ["Bollywood", "Hollywood"],
      value: "Bollywood",
      onChange: () => {},
    },
    {
      label: "Mode",
      options: ["Classis", "Hot Seat"],
      value: "Classic",
      onChange: () => {},
    },
  ]);

  const [counterItems, setCounterItems] = useState([
    {
      label: "Players",
      min: 2,
      max: 10,
      value: 2,
      stride: 1,
    },
    {
      label: "Draw Time (sec)",
      min: 15,
      max: 600,
      value: 60,
      stride: 15,
    },
    {
      label: "Rounds",
      min: 1,
      max: 10,
      value: 3,
      stride: 1,
    },
  ]);

  const updateValue = (index: number, value: string | number, type: string) => {
    if (type === "dropdown" && typeof value === "string") {
      setDropdownItems((prev) =>
        prev.map((item, i) => (i === index ? { ...item, value } : item)),
      );
    } else if (type === "counter" && typeof value === "number") {
      setCounterItems((prev) =>
        counterItems.map((item, i) =>
          i === index ? { ...item, value } : item,
        ),
      );
    }
  };

  return (
    <View className="w-full p-8">
      {" "}
      {dropdownItems.map((item, index) => {
        return (
          <Dropdown
            key={index}
            label={item.label}
            options={item.options}
            value={item.value}
            onChange={(option: string) =>
              updateValue(index, option, "dropdown")
            }
          />
        );
      })}
      {counterItems.map((item, index) => {
        return (
          <Counter
            key={index}
            label={item.label}
            min={item.min}
            max={item.max}
            stride={item.stride}
            value={item.value}
            onChange={(value: number) => updateValue(index, value, "counter")}
          />
        );
      })}
    </View>
  );
};
