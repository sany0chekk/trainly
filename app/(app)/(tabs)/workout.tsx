import { View, Text, TouchableOpacity } from "react-native";
import { useAuth } from "@/hooks/useAuth";
export default function WorkoutScreen() {
  const { signOut } = useAuth();
  return (
    <View className="container items-center justify-center">
      <TouchableOpacity onPress={signOut}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
