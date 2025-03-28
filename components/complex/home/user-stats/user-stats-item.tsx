import { ReactNode } from "react";
import { useWindowDimensions, View, Text } from "react-native";
import tw from "@/config/tailwind";

export default function UserStatsItem({ children }: { children: ReactNode }) {
  const { width } = useWindowDimensions();

  return (
    <View
      style={tw`w-[${
        width / 2 - 20
      }px] h-[150px] bg-background rounded-lg justify-center items-center gap-2`}
    >
      {children}
    </View>
  );
}
