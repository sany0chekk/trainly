import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useAuth } from "@/hooks/useAuth";

export default function LoginScreen() {
  const { signInWithGoogle } = useAuth();

  return (
    <View className="container items-center justify-center">
      <View className="justify-center items-center mb-10">
        <Text className="text-3xl font-bold text-text uppercase">
          Welcome to Trainly
        </Text>
        <Text className="text-text-secondary uppercase text-[10px]">
          Your personal workout journey starts here
        </Text>
      </View>
      <View className="mb-20 items-center bg-background rounded-lg p-6">
        <Text className="text-text text-center mb-6">
          Track your progress, create custom workouts,{"\n"}and achieve your
          fitness goals
        </Text>
        <View className="flex-row flex-wrap justify-center gap-2">
          <Text className="text-text font-bold text-xs bg-primary p-2 rounded-lg">
            Progress Tracking
          </Text>
          <Text className="text-text font-bold text-xs bg-primary p-2 rounded-lg">
            Custom Workouts
          </Text>
          <Text className="text-text font-bold text-xs bg-primary p-2 rounded-lg">
            Exercise Library
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={signInWithGoogle}
        className="bg-text py-4 px-6 w-full flex-row items-center justify-center gap-4 rounded-full"
      >
        <Image
          source={require("../../assets/images/google.png")}
          contentFit="contain"
          style={{ width: 25, height: 25 }}
        />
        <Text className="text-background font-bold text-lg text-center">
          Continue with Google
        </Text>
      </TouchableOpacity>
    </View>
  );
}
