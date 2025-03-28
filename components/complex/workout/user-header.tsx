import { View, Text } from "react-native";
import { Image } from "expo-image";
import { useAuth } from "@/hooks/useAuth";
import tw from "@/config/tailwind";

export default function UserHeader() {
  const { user } = useAuth();

  const currentTime = new Date().toLocaleTimeString();
  const greeting = (currentTime: string) => {
    if (Number(currentTime) < 12) {
      return "Good morning";
    } else if (Number(currentTime) < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };

  return (
    <View style={tw`bg-background p-4 rounded-lg relative h-[200px]`}>
      <Text style={tw`text-text font-bold text-xl text-right`}>
        {greeting(currentTime)}, {"\n"}
        {user?.user_metadata.name}
      </Text>
      <Image
        source={require("../../../assets/images/trainer.png")}
        contentFit="cover"
        style={[tw`w-[150px] h-[200px] absolute bottom-0`]}
      />
    </View>
  );
}
