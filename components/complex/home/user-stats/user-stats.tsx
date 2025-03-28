import tw from "@/config/tailwind";
import { View, Text, useWindowDimensions } from "react-native";
import UserStatsItem from "./user-stats-item";
import { styles } from "@/components/ui";
export default function UserStats() {
  const { width } = useWindowDimensions();
  return (
    <View style={tw`gap-2 flex-row flex-wrap`}>
      <UserStatsItem>
        <Text style={tw`text-text font-bold text-4xl`}>10</Text>
        <Text
          style={tw`text-text-secondary font-bold text-xs uppercase text-center`}
        >
          Total workouts {`\n`} sessions
        </Text>
      </UserStatsItem>
      <UserStatsItem>
        <Text style={tw`text-text font-bold text-4xl`}>120</Text>
        <Text
          style={tw`text-text-secondary font-bold text-xs uppercase text-center`}
        >
          Total exercises {`\n`} completed
        </Text>
      </UserStatsItem>
      <UserStatsItem>
        <Text style={tw`text-text font-bold text-4xl`}>30</Text>
        <Text
          style={tw`text-text-secondary font-bold text-xs uppercase text-center`}
        >
          Total Time
        </Text>
      </UserStatsItem>
      <UserStatsItem>
        <Text style={tw`text-text font-bold text-4xl`}>-400 </Text>
        <Text
          style={tw`text-text-secondary font-bold text-xs uppercase text-center`}
        >
          Calories
        </Text>
      </UserStatsItem>
    </View>
  );
}
