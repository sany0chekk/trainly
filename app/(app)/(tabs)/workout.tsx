import UserHeader from "@/components/complex/workout/user-header";
import { View, Text } from "react-native";
import { styles } from "@/components/ui";
export default function WorkoutScreen() {
  return (
    <View style={styles.container}>
      <UserHeader />
    </View>
  );
}
