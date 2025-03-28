import UserHeader from "@/components/complex/home/user-header";
import UserStats from "@/components/complex/home/user-stats/user-stats";
import { Button, styles } from "@/components/ui";
import tw from "@/config/tailwind";
import { COLORS } from "@/config/theme";
import { Dumbbell } from "lucide-react-native";
import { View, ScrollView, Text } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} bounces={false}>
      <View style={tw`gap-10 pb-25`}>
        <UserHeader />
        <UserStats />
        <Button
          style={tw`bg-primary-light rounded-2xl p-4 flex-row items-center justify-center gap-4`}
        >
          <Dumbbell color={COLORS.text.default} size={34} />
          <Text style={tw`text-text font-bold text-2xl`}>Start workout</Text>
        </Button>
      </View>
    </ScrollView>
  );
}
