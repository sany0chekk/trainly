import { View, Text } from "react-native";
import { Image } from "expo-image";
import { useAuth } from "@/hooks/useAuth";
import tw from "@/config/tailwind";
import { useEffect, useState } from "react";

export default function UserHeader() {
  const currentTime = new Date().toLocaleTimeString("uk-UA", { hour12: false });

  const [time, setTime] = useState(currentTime);
  const { user } = useAuth();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString("uk-UA", { hour12: false }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
    <View style={tw`bg-background p-4 rounded-lg relative h-[180px]`}>
      <Text style={tw`text-text font-bold text-2xl text-right mb-10`}>
        {greeting(currentTime)}, {"\n"}
        {user?.user_metadata.name}
      </Text>
      <Text style={tw`text-primary-light font-bold text-5xl text-right`}>
        {time}
      </Text>
      <Image
        source={require("../../../assets/images/trainer.png")}
        contentFit="cover"
        style={[tw`w-[130px] h-[180px] absolute bottom-0`]}
      />
    </View>
  );
}
